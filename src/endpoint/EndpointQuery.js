import React, {useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import EndpointInput from "./EndpointInput";
import API from "../API";
import axios from "axios";
import {mkPermalink, mkPermalinkLong, params2Form} from "../Permalink";
import ResultEndpointQuery from "../results/ResultEndpointQuery";
import {InitialQuery, paramsFromStateQuery, mkQueryTabs} from "../query/Query"
import Alert from "react-bootstrap/Alert";
import Row from "react-bootstrap/Row";
import qs from "query-string";
import {queryParamsFromQueryParams} from "../query/Query";
import {endpointParamsFromQueryParams} from "./Endpoint";
import ProgressBar from "react-bootstrap/ProgressBar";

function EndpointQuery(props) {
    const [endpoint, setEndpoint] = useState('')
    const [params, setParams] = useState(null)
    const [lastParams, setLastParams] = useState(null)
    const [result, setResult] = useState('')
    const [error, setError] = useState('')
    const [query, setQuery] = useState(InitialQuery)
    const [permalink, setPermalink] = useState(null)
    const [loading,setLoading] = useState(false)
    const [progressPercent,setProgressPercent] = useState(0)

    const url = API.endpointQuery
    const resultsElementId = "results"

    useEffect(() => {
            if (props.location.search) {
                const queryParams = qs.parse(props.location.search);

                let paramsQuery, paramsEndpoint = {}
                if (queryParams.query) {
                    paramsQuery = queryParamsFromQueryParams(queryParams)
                    console.log("PARAMS QUERY: ", paramsQuery)
                    setQuery(paramsQuery)

                    // Update codemirror
                    if (params.activeTab && params.activeTab.includes("TextArea")) {
                        const codeMirrorElement = document.querySelector('.CodeMirror')
                        if (codeMirrorElement && codeMirrorElement.CodeMirror)
                            codeMirrorElement.CodeMirror.setValue(params.query)
                    }
                }
                if (queryParams.endpoint) {
                    paramsEndpoint = endpointParamsFromQueryParams(queryParams)
                    console.log("PARAMS ENDPOINT: ", paramsEndpoint)
                    setEndpoint(paramsEndpoint.endpoint)
                }

                let params = {...paramsQuery, ...paramsEndpoint};

                setParams(params)
                setLastParams(params)
            }

        },
        [
            props.location.search,
        ]
    );

    // Perform query on params change (normally on submit)
    useEffect( () => {
        if (params && !loading){
            if (!params.endpoint) setError("No endpoint provided")
            else if (!params.query) setError("No query provided")
            else {
                resetState()
                setUpHistory()
                postQuery()
            }
        }
    }, [params])

    // Scroll after query
    useEffect( () => {
        setTimeout(showResults, 500)
    }, [result])


    function handleOnChange(value) {
        setEndpoint(value);
    }

    function handleOnSelect(){
        setLoading(false)
    }

    async function handleSubmit(event) {
        event.preventDefault();
        setParams({...paramsFromStateQuery(query), endpoint})
    }

    function postQuery(cb) {
        setLoading(true);
        setProgressPercent(20)
        const formData = params2Form(params)

        axios.post(url,formData).then (response => response.data)
            .then(async data => {
                setProgressPercent(70)
                setResult({ result: data })
                setPermalink(await mkPermalink(API.endpointQueryRoute, params));
                setProgressPercent(90)
                if (cb) cb()
                setProgressPercent(100)

            })
            .catch(function (error) {
                setError(`Error calling server at ${url}: ${error}.\n Did you input a valid SPARQL endpoint and query?`)
            })
            .finally( () => {
                setLoading(false)
            });
    }

    function showResults(){
        const resultsDiv = document.getElementById(resultsElementId)
        if (resultsDiv) {
            window.scrollTo(0, resultsDiv.offsetTop - resultsDiv.scrollTop)
        }
    }

    function setUpHistory() {
        // Store the last search URL in the browser history to allow going back
        if (params && lastParams && JSON.stringify(params) !== JSON.stringify(lastParams)){
            // eslint-disable-next-line no-restricted-globals
            history.pushState(null, document.title, mkPermalinkLong(API.endpointQueryRoute, lastParams))
        }
        // Change current url for shareable links
        // eslint-disable-next-line no-restricted-globals
        history.replaceState(null, document.title ,mkPermalinkLong(API.endpointQueryRoute, params))

        setLastParams(params)
    }

    function resetState() {
        setResult(null)
        setPermalink(null)
        setError(null)
        setProgressPercent(0)
    }

    return (
        <Container fluid={true}>
            <h1>Endpoint query</h1>
            <Form id="common-endpoints" onSubmit={handleSubmit}>
                <EndpointInput value={endpoint}
                               handleOnChange={handleOnChange}
                               handleOnSelect={handleOnSelect}
                />
                {mkQueryTabs(query, setQuery)}
                <Button variant="primary" type="submit"
                        className={"btn-with-icon " + (loading ? "disabled" : "")} disabled={loading}>
                    Query endpoint</Button>
            </Form>

            <div id={resultsElementId}>
                {loading || result || error || permalink ?
                    <Row style={{margin: '10px auto 10% auto'}}>
                        {loading ? <ProgressBar className="width-100" striped animated variant="info"
                                                now={progressPercent}/> :
                            error ? <Alert className="width-100" variant='danger'>{error}</Alert> :
                                result ? <ResultEndpointQuery
                                    result={result}
                                    error={error}
                                    permalink={permalink}
                                /> : null}
                    </Row> : null
                }
            </div>
        </Container>
    )
}

export default EndpointQuery;

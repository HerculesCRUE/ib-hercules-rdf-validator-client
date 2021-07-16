import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import API from "./API.js";
import './App.css'

class RDFShapeNavbar extends React.Component {
  render() {
    return (
      <Navbar className="main-nav">
        <Navbar.Brand href="/">RDFShape</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Data" id="basic-nav-dropdown">
              <NavDropdown.Item href={API.dataInfoRoute}>Info</NavDropdown.Item>
              <NavDropdown.Item href={API.dataConvertRoute}>
                Convert
              </NavDropdown.Item>
              <NavDropdown.Item href={API.dataVisualizeRoute}>
                Visualize (Graphviz)
              </NavDropdown.Item>
              <NavDropdown.Item href={API.cytoVisualizeRoute}>
                Visualize (Cytoscape)
              </NavDropdown.Item>
              <NavDropdown.Item href={API.dataMergeRoute}>
                Merge & convert
              </NavDropdown.Item>
              <NavDropdown.Item href={API.dataMergeVisualizeRoute}>
                Merge & Visualize
              </NavDropdown.Item>
              <NavDropdown.Item href={API.dataQueryRoute}>
                Query
              </NavDropdown.Item>
              <NavDropdown.Item href={API.dataExtractRoute}>
                Extract ShEx
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Endpoint" id="basic-nav-dropdown">
              <NavDropdown.Item href={API.endpointInfoRoute}>
                Endpoint Info
              </NavDropdown.Item>
              <NavDropdown.Item href={API.endpointQueryRoute}>
                Query
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="ShEx" id="basic-nav-dropdown">
              <NavDropdown.Item href={API.shExValidateRoute}>
                Validate data with ShEx
              </NavDropdown.Item>
              <NavDropdown.Item href={API.shExValidateEndpointRoute}>
                Validate endpoint data with ShEx
              </NavDropdown.Item>
              <NavDropdown.Item href={API.shExInfoRoute}>
                Info about ShEx schema
              </NavDropdown.Item>
              <NavDropdown.Item href={API.shExVisualizeRoute}>
                Visualize ShEx schema
              </NavDropdown.Item>
              {/*                            <NavDropdown.Item href="/shexVisualizeCytoscape">Visualize ShEx schema (Cytoscape)</NavDropdown.Item>*/}
              <NavDropdown.Item href={API.shExConvertRoute}>
                Convert ShEx formats
              </NavDropdown.Item>
              <NavDropdown.Item href={API.shEx2ShaclRoute}>
                ShEx &#8594; SHACL
              </NavDropdown.Item>
              <NavDropdown.Item href={API.shEx2XMIRoute}>
                ShEx &#10231; UML
              </NavDropdown.Item>
              <NavDropdown.Item href={API.shapeFormRoute}>
                ShEx to Form
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="SHACL" id="basic-nav-dropdown">
              <NavDropdown.Item href={API.shaclValidateRoute}>
                Validate
              </NavDropdown.Item>
              <NavDropdown.Item href={API.shaclConvertRoute}>
                Convert SHACL formats
              </NavDropdown.Item>
              <NavDropdown.Item href={API.shacl2ShExRoute}>
                SHACL &#8594; ShEx
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="ShapeMap" id="basic-nav-dropdown">
              <NavDropdown.Item href={API.shapeMapInfoRoute}>
                Info about ShapeMap
              </NavDropdown.Item>
              {/*
                            <NavDropdown.Item href="/shapeMapFix">Fix shapeMap with RDFData</NavDropdown.Item>
                            <NavDropdown.Item href="/shapeMapConvert">Convert ShapeMap format</NavDropdown.Item>
*/}
            </NavDropdown>
            {
              // SPARQL Options are redundant
              /*
                        <NavDropdown title="SPARQL" id="basic-nav-dropdown">
                            <NavDropdown.Item href={API.dataQueryRoute}>Query</NavDropdown.Item>
                            <NavDropdown.Item href={API.endpointQueryRoute}>Query endpoint</NavDropdown.Item>
                        </NavDropdown>*/
            }
            <NavDropdown title="Wikidata" id="basic-nav-dropdown">
              <NavDropdown.Item target="_blank" href="http://wikishape.weso.es">
                Wikishape
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <NavDropdown
              title="Examples"
              id="basic-nav-dropdown"
              className="mr-sm-2"
            >
              <NavDropdown.Item href='/dataInfo?data=%40prefix%20%3A%20%20%20%20%20%20<http%3A%2F%2Fexample.org%2F>%20.%0A%40prefix%20schema%3A%20<http%3A%2F%2Fschema.org%2F>%20.%0A%40prefix%20item%3A%20%20<http%3A%2F%2Fdata.europeana.eu%2Fitem%2F04802%2F>%20.%0A%40prefix%20dbr%3A%20%20%20<http%3A%2F%2Fdbpedia.org%2Fresource%2F>%20.%0A%40prefix%20xsd%3A%20%20%20<http%3A%2F%2Fwww.w3.org%2F2001%2FXMLSchema%23>%20.%0A%40prefix%20dcterms%3A%20<http%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F>%20.%0A%40prefix%20it%3A%20%20%20%20<http%3A%2F%2Fdata.example.org%2Fitem%2F>%20.%0A%40prefix%20wd%3A%20%20%20%20<http%3A%2F%2Fwww.wikidata.org%2Fentity%2F>%20.%0A%40prefix%20foaf%3A%20%20<http%3A%2F%2Fxmlns.com%2Ffoaf%2F0.1%2F>%20.%0A%0A%3Aalice%20%20a%20%20%20%20%20%20%20foaf%3APerson%20.%0A%0A%3Abob%20%20%20%20a%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20foaf%3APerson%20%3B%0A%20%20%20%20%20%20%20%20schema%3AbirthDate%20%20%20%20%20"1990-07-04"%5E%5Exsd%3Adate%20%3B%0A%20%20%20%20%20%20%20%20foaf%3Aknows%20%20%20%20%20%20%20%20%20%20%20<http%3A%2F%2Fexample.org%2Falice%23me>%20%3B%0A%20%20%20%20%20%20%20%20foaf%3Atopic_interest%20%20wd%3AQ12418%20.%0A%0A%3Acarol%20%20a%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20foaf%3APerson%20%3B%0A%20%20%20%20%20%20%20%20schema%3AbirthDate%20%20"unknown"%20.%0A%0Awd%3AQ12418%20%20dcterms%3Acreator%20%20dbr%3ALeonardo_da_Vinci%20%3B%0A%20%20%20%20%20%20%20%20dcterms%3Atitle%20%20%20%20"Mona%20Lisa"%20.%0A%0Ait%3A243FA%20%20dcterms%3Asubject%20%20wd%3AQ12418%20%3B%0A%20%20%20%20%20%20%20%20dcterms%3Atitle%20%20%20%20"La%20Joconde%20à%20Washington"%40fr%20.%0A&dataFormat=TURTLE&inference=NONE'>
                Data info
              </NavDropdown.Item>
              <NavDropdown.Item href="/dataConvert?data=%40prefix%20%3A%20%20%20%20%20%20%3Chttp%3A%2F%2Fexample.org%2F%3E%20.%0A%40prefix%20schema%3A%20%3Chttp%3A%2F%2Fschema.org%2F%3E%20.%0A%40prefix%20item%3A%20%20%3Chttp%3A%2F%2Fdata.europeana.eu%2Fitem%2F04802%2F%3E%20.%0A%40prefix%20dbr%3A%20%20%20%3Chttp%3A%2F%2Fdbpedia.org%2Fresource%2F%3E%20.%0A%40prefix%20xsd%3A%20%20%20%3Chttp%3A%2F%2Fwww.w3.org%2F2001%2FXMLSchema%23%3E%20.%0A%40prefix%20dcterms%3A%20%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F%3E%20.%0A%40prefix%20it%3A%20%20%20%20%3Chttp%3A%2F%2Fdata.example.org%2Fitem%2F%3E%20.%0A%40prefix%20wd%3A%20%20%20%20%3Chttp%3A%2F%2Fwww.wikidata.org%2Fentity%2F%3E%20.%0A%40prefix%20foaf%3A%20%20%3Chttp%3A%2F%2Fxmlns.com%2Ffoaf%2F0.1%2F%3E%20.%0A%0A%3Aalice%20%20a%20%20%20%20%20%20%20foaf%3APerson%20.%0A%0A%3Abob%20%20%20%20a%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20foaf%3APerson%20%3B%0A%20%20%20%20%20%20%20%20schema%3AbirthDate%20%20%20%20%20%221990-07-04%22%5E%5Exsd%3Adate%20%3B%0A%20%20%20%20%20%20%20%20foaf%3Aknows%20%20%20%20%20%20%20%20%20%20%20%3Chttp%3A%2F%2Fexample.org%2Falice%23me%3E%20%3B%0A%20%20%20%20%20%20%20%20foaf%3Atopic_interest%20%20wd%3AQ12418%20.%0A%0A%3Acarol%20%20a%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20foaf%3APerson%20%3B%0A%20%20%20%20%20%20%20%20schema%3AbirthDate%20%20%22unknown%22%20.%0A%0Awd%3AQ12418%20%20dcterms%3Acreator%20%20dbr%3ALeonardo_da_Vinci%20%3B%0A%20%20%20%20%20%20%20%20dcterms%3Atitle%20%20%20%20%22Mona%20Lisa%22%20.%0A%0Ait%3A243FA%20%20dcterms%3Asubject%20%20wd%3AQ12418%20%3B%0A%20%20%20%20%20%20%20%20dcterms%3Atitle%20%20%20%20%22La%20Joconde%20%C3%A0%20Washington%22%40fr%20.&amp;dataFormat=TURTLE&amp;targetDataFormat=JSON-LD&amp;inference=NONE">
                Data conversion
              </NavDropdown.Item>
              <NavDropdown.Item href='/dataVisualize?activeTab=%23dataTextArea&data=%40prefix%20%3A%20%20%20%20%20%20<http%3A%2F%2Fexample.org%2F>%20.%0A%40prefix%20schema%3A%20<http%3A%2F%2Fschema.org%2F>%20.%0A%40prefix%20item%3A%20%20<http%3A%2F%2Fdata.europeana.eu%2Fitem%2F04802%2F>%20.%0A%40prefix%20dbr%3A%20%20%20<http%3A%2F%2Fdbpedia.org%2Fresource%2F>%20.%0A%40prefix%20xsd%3A%20%20%20<http%3A%2F%2Fwww.w3.org%2F2001%2FXMLSchema%23>%20.%0A%40prefix%20dcterms%3A%20<http%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F>%20.%0A%40prefix%20it%3A%20%20%20%20<http%3A%2F%2Fdata.example.org%2Fitem%2F>%20.%0A%40prefix%20wd%3A%20%20%20%20<http%3A%2F%2Fwww.wikidata.org%2Fentity%2F>%20.%0A%40prefix%20foaf%3A%20%20<http%3A%2F%2Fxmlns.com%2Ffoaf%2F0.1%2F>%20.%0A%0A%3Aalice%20%20a%20%20%20%20%20%20%20foaf%3APerson%20.%0A%0A%3Abob%20%20%20%20a%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20foaf%3APerson%20%3B%0A%20%20%20%20%20%20%20%20schema%3AbirthDate%20%20%20%20%20"1990-07-04"%5E%5Exsd%3Adate%20%3B%0A%20%20%20%20%20%20%20%20foaf%3Aknows%20%20%20%20%20%20%20%20%20%20%20<http%3A%2F%2Fexample.org%2Falice%23me>%20%3B%0A%20%20%20%20%20%20%20%20foaf%3Atopic_interest%20%20wd%3AQ12418%20.%0A%0A%3Acarol%20%20a%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20foaf%3APerson%20%3B%0A%20%20%20%20%20%20%20%20schema%3AbirthDate%20%20"unknown"%20.%0A%0Awd%3AQ12418%20%20dcterms%3Acreator%20%20dbr%3ALeonardo_da_Vinci%20%3B%0A%20%20%20%20%20%20%20%20dcterms%3Atitle%20%20%20%20"Mona%20Lisa"%20.%0A%0Ait%3A243FA%20%20dcterms%3Asubject%20%20wd%3AQ12418%20%3B%0A%20%20%20%20%20%20%20%20dcterms%3Atitle%20%20%20%20"La%20Joconde%20à%20Washington"%40fr%20.%0A&dataFormat=TURTLE&dataFormatTextArea=TURTLE&targetDataFormat=SVG&targetGraphFormat=SVG'>
                Data visualization
              </NavDropdown.Item>
              <NavDropdown.Item href="/dataQuery?activeTab=%23queryTextArea&data=PREFIX%20%3A%20%20%20%20%20%20%20%3Chttp%3A%2F%2Fexample.org%2F%3E%0APREFIX%20schema%3A%20%3Chttp%3A%2F%2Fschema.org%2F%3E%0APREFIX%20xsd%3A%20%20%20%20%3Chttp%3A%2F%2Fwww.w3.org%2F2001%2FXMLSchema%23%3E%0APREFIX%20foaf%3A%20%20%20%3Chttp%3A%2F%2Fxmlns.com%2Ffoaf%2F0.1%2F%3E%0A%0A%3Aalice%20schema%3Aname%20%20%20%20%20%20%20%20%20%20%20%22Alice%22%20%3B%20%20%20%20%20%20%0A%20%20%20%20%20%20%20schema%3Agender%20%20%20%20%20%20%20%20%20schema%3AFemale%20%3B%0A%20%20%20%20%20%20%20schema%3Aknows%20%20%20%20%20%20%20%20%20%20%3Abob%20.%0A%0A%3Abob%20%20%20schema%3Agender%20%20%20%20%20%20%20%20%20schema%3AMale%20%3B%20%20%0A%20%20%20%20%20%20%20schema%3Aname%20%20%20%20%20%20%20%20%20%20%20%22Robert%22%3B%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20schema%3AbirthDate%20%20%20%20%20%20%221980-03-10%22%5E%5Exsd%3Adate%20.%0A%0A%3Acarol%20schema%3Aname%20%20%20%20%20%20%20%20%20%20%20%22Carol%22%20%3B%20%20%20%20%20%20%0A%20%20%20%20%20%20%20schema%3Agender%20%20%20%20%20%20%20%20%20%22unspecified%22%20%3B%20%20%0A%20%20%20%20%20%20%20foaf%3Aname%20%20%20%20%20%20%20%20%20%20%20%20%20%22Carol%22%20.%0A%0A%3Adave%20%20schema%3Aname%20%20%20%20%20%20%20%20%20%20%20%22Dave%22%3B%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20schema%3Agender%20%20%20%20%20%20%20%20%20%22XYY%22%3B%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20schema%3AbirthDate%20%20%20%20%20%201980%20.%20%20%20%20%20%20%20%20%20%0A%0A%3Aemily%20schema%3Aname%20%22Emily%22%2C%20%22Emilee%22%20%3B%20%20%20%20%20%20%0A%20%20%20%20%20%20%20schema%3Agender%20%20%20%20%20%20%20%20%20schema%3AFemale%20.%0A%0A%3Afrank%20foaf%3Aname%20%20%20%20%20%20%20%20%20%20%20%20%20%22Frank%22%20%3B%20%20%20%20%20%20%0A%20%20%20%20%20%20%20schema%3Agender%3A%20%20%20%20%20%20%20%20schema%3AMale%20.%20%20%0A%0A%3Agrace%20schema%3Aname%20%20%20%20%20%20%20%20%20%20%20%22Grace%22%20%3B%20%20%20%20%20%20%0A%20%20%20%20%20%20%20schema%3Agender%20%20%20%20%20%20%20%20%20schema%3AMale%20%3B%20%20%0A%20%20%20%20%20%20%20schema%3Aknows%20%20%20%20%20%20%20%20%20%20_%3Ax%20.%20%20%20%20%20%20%20%20%20%20%0A%0A%3Aharold%20schema%3Aname%20%20%20%20%20%20%20%20%20%22Harold%22%20%3B%20%20%20%20%0A%20%20%20%20%20%20%20%20schema%3Agender%20%20%20%20%20%20%20schema%3AMale%20%3B%20%0A%20%20%20%20%20%20%20%20schema%3Aknows%20%20%20%20%20%20%20%20%3Agrace%20.%20%20%20%20%20%20&dataFormat=TURTLE&dataFormatTextArea=TURTLE&inference=None&query=PREFIX%20schema%3A%20%3Chttp%3A%2F%2Fschema.org%2F%3E%0Aselect%20%3Fperson%20%3Fname%20where%20%7B%0A%20%20%3Fperson%20schema%3Aname%20%3Fname%20%0A%7D">
                Data Query (SPARQL)
              </NavDropdown.Item>
              <NavDropdown.Item href="/shExConvert?activeSchemaTab=%23schemaTextArea&schema=prefix%20schema%3A%20<http%3A%2F%2Fschema.org%2F>%20%0Aprefix%20xsd%3A%20%20%20<http%3A%2F%2Fwww.w3.org%2F2001%2FXMLSchema%23>%20%0Aprefix%20dcterms%3A%20<http%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F>%20%0Aprefix%20it%3A%20%20%20%20<http%3A%2F%2Fdata.europeana.eu%2Fitem%2F>%20%0Aprefix%20foaf%3A%20%20<http%3A%2F%2Fxmlns.com%2Ffoaf%2F0.1%2F>%20%0A%0A<User>%20IRI%20%7B%20%0A%20a%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5B%20foaf%3APerson%20%5D%3B%20%0A%20schema%3AbirthDate%20%20%20%20%20xsd%3Adate%3F%20%20%3B%0A%20foaf%3Aknows%20%20%20%20%20%20%20%20%20%20%20%40<User>%2A%20%3B%0A%20foaf%3Atopic_interest%20%20%40<Topic>%7B0%2C10%7D%0A%7D%0A%0A<Topic>%20%7B%0A%20%20dcterms%3Atitle%20%20%20xsd%3Astring%20%3B%0A%20%20dcterms%3Acreator%20IRI%20%3B%0A%20%20%5Edcterms%3Asubject%20%40<Item>%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0A%7D%0A%0A<Item>%20%7B%0A%20%20dcterms%3Atitle%20%5B%40en%20%40fr%20%40es%5D%20%3B%0A%7D&schemaEmbedded=false&schemaEngine=ShEx&schemaFormat=ShExC&schemaFormatTextArea=ShExC&targetSchemaFormat=JSON-LD">
                ShEx conversion
              </NavDropdown.Item>
              <NavDropdown.Item href="/shExValidate?activeSchemaTab=%23schemaTextArea&activeTab=%23dataTextArea&data=PREFIX%20%3A%20%20%20%20%20%20%20%3Chttp%3A%2F%2Fexample.org%2F%3E%0APREFIX%20schema%3A%20%3Chttp%3A%2F%2Fschema.org%2F%3E%0APREFIX%20xsd%3A%20%20%20%20%3Chttp%3A%2F%2Fwww.w3.org%2F2001%2FXMLSchema%23%3E%0APREFIX%20foaf%3A%20%20%20%3Chttp%3A%2F%2Fxmlns.com%2Ffoaf%2F0.1%2F%3E%0A%0A%3Aalice%20schema%3Aname%20%20%20%20%20%20%20%20%20%20%20%22Alice%22%20%3B%20%20%20%20%20%20%20%20%20%20%20%20%23%20%25%2A%20%5CPasses%7B%3AUser%7D%20%2A%29%0A%20%20%20%20%20%20%20schema%3Agender%20%20%20%20%20%20%20%20%20schema%3AFemale%20%3B%0A%20%20%20%20%20%20%20schema%3Aknows%20%20%20%20%20%20%20%20%20%20%3Abob%20.%0A%0A%3Abob%20%20%20schema%3Agender%20%20%20%20%20%20%20%20%20schema%3AMale%20%3B%20%20%20%20%20%20%20%20%23%20%25%2A%20%5CPasses%7B%3AUser%7D%20%2A%29%0A%20%20%20%20%20%20%20schema%3Aname%20%20%20%20%20%20%20%20%20%20%20%22Robert%22%3B%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20schema%3AbirthDate%20%20%20%20%20%20%221980-03-10%22%5E%5Exsd%3Adate%20.%0A%0A%3Acarol%20schema%3Aname%20%20%20%20%20%20%20%20%20%20%20%22Carol%22%20%3B%20%20%20%20%20%20%20%20%20%20%20%20%23%20%25%2A%20%5CPasses%7B%3AUser%7D%20%2A%29%0A%20%20%20%20%20%20%20schema%3Agender%20%20%20%20%20%20%20%20%20%22unspecified%22%20%3B%20%20%0A%20%20%20%20%20%20%20foaf%3Aname%20%20%20%20%20%20%20%20%20%20%20%20%20%22Carol%22%20.%0A%0A%3Adave%20%20schema%3Aname%20%20%20%20%20%20%20%20%20%20%20%22Dave%22%3B%20%20%20%20%20%20%20%20%20%23%20%25%2A%20%5CFails%7B%3AUser%7D%20%2A%29%0A%20%20%20%20%20%20%20schema%3Agender%20%20%20%20%20%20%20%20%20%22XYY%22%3B%20%20%20%20%20%20%20%20%20%20%23%0A%20%20%20%20%20%20%20schema%3AbirthDate%20%20%20%20%20%201980%20.%20%20%20%20%20%20%20%20%20%20%23%20%25%2A%201980%20is%20not%20an%20xsd%3Adate%20%2A%29%0A%0A%3Aemily%20schema%3Aname%20%22Emily%22%2C%20%22Emilee%22%20%3B%20%20%20%20%20%20%20%23%20%25%2A%20%5CFails%7B%3AUser%7D%20%2A%29%0A%20%20%20%20%20%20%20schema%3Agender%20%20%20%20%20%20%20%20%20schema%3AFemale%20.%20%23%20%25%2A%20too%20many%20schema%3Anames%20%2A%29%0A%0A%3Afrank%20foaf%3Aname%20%20%20%20%20%20%20%20%20%20%20%20%20%22Frank%22%20%3B%20%20%20%20%20%20%20%23%20%25%2A%20%5CFails%7B%3AUser%7D%20%2A%29%0A%20%20%20%20%20%20%20schema%3Agender%3A%20%20%20%20%20%20%20%20schema%3AMale%20.%20%20%20%23%20%25%2A%20missing%20schema%3Aname%20%2A%29%0A%0A%3Agrace%20schema%3Aname%20%20%20%20%20%20%20%20%20%20%20%22Grace%22%20%3B%20%20%20%20%20%20%20%23%20%25%2A%20%5CFails%7B%3AUser%7D%20%2A%29%0A%20%20%20%20%20%20%20schema%3Agender%20%20%20%20%20%20%20%20%20schema%3AMale%20%3B%20%20%20%23%20%0A%20%20%20%20%20%20%20schema%3Aknows%20%20%20%20%20%20%20%20%20%20_%3Ax%20.%20%20%20%20%20%20%20%20%20%20%20%23%20%25%2A%20%5C_%3Ax%20is%20not%20an%20IRI%20%2A%29%0A%0A%3Aharold%20schema%3Aname%20%20%20%20%20%20%20%20%20%22Harold%22%20%3B%20%20%20%20%23%20%25%2A%20%5CFails%7B%3AUser%7D%20%2A%29%0A%20%20%20%20%20%20%20%20schema%3Agender%20%20%20%20%20%20%20schema%3AMale%20%3B%20%0A%20%20%20%20%20%20%20%20schema%3Aknows%20%20%20%20%20%20%20%20%3Agrace%20.%20%20%20%20%20%20%23%20%25%2A%20%3Agrace%20does%20not%20conform%20to%20%3AUser%20%2A%29&dataFormat=TURTLE&dataFormatTextArea=TURTLE&schema=PREFIX%20%3A%20%20%20%20%20%20%20%3Chttp%3A%2F%2Fexample.org%2F%3E%0APREFIX%20schema%3A%20%3Chttp%3A%2F%2Fschema.org%2F%3E%0APREFIX%20xsd%3A%20%20%3Chttp%3A%2F%2Fwww.w3.org%2F2001%2FXMLSchema%23%3E%0A%0A%3AUser%20%7B%0A%20%20schema%3Aname%20%20%20%20%20%20%20%20%20%20xsd%3Astring%20%20%3B%0A%20%20schema%3AbirthDate%20%20%20%20%20xsd%3Adate%3F%20%20%3B%0A%20%20schema%3Agender%20%20%20%20%20%20%20%20%5B%20schema%3AMale%20schema%3AFemale%20%5D%20OR%20xsd%3Astring%20%3B%0A%20%20schema%3Aknows%20%20%20%20%20%20%20%20%20IRI%20%40%3AUser%2A%0A%7D&schemaEmbedded=false&schemaEngine=ShEx&schemaFormat=ShExC&schemaFormatTextArea=ShExC&shapeMap=%3Aalice%40%3AUser%2C%3Abob%40%3AUser%2C%3Acarol%40%3AUser%2C%3Aemily%40%3AUser%2C%3Afrank%40%3AUser%2C%3Agrace%40%3AUser%2C%3Aharold%40%3AUser&shapeMapActiveTab=%23shapeMapTextArea&shapeMapFormat=Compact&shapeMapFormatTextArea=ShExC&triggerMode=shapeMap">
                ShEx validation (example from book)
              </NavDropdown.Item>
              <NavDropdown.Item href='/shExValidate?data=%40prefix%20%3A%20%20%20%20%20%20<http%3A%2F%2Fexample.org%2F>%20.%0A%40prefix%20schema%3A%20<http%3A%2F%2Fschema.org%2F>%20.%0A%40prefix%20item%3A%20%20<http%3A%2F%2Fdata.europeana.eu%2Fitem%2F04802%2F>%20.%0A%40prefix%20dbr%3A%20%20%20<http%3A%2F%2Fdbpedia.org%2Fresource%2F>%20.%0A%40prefix%20xsd%3A%20%20%20<http%3A%2F%2Fwww.w3.org%2F2001%2FXMLSchema%23>%20.%0A%40prefix%20dcterms%3A%20<http%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F>%20.%0A%40prefix%20it%3A%20%20%20%20<http%3A%2F%2Fdata.example.org%2Fitem%2F>%20.%0A%40prefix%20wd%3A%20%20%20%20<http%3A%2F%2Fwww.wikidata.org%2Fentity%2F>%20.%0A%40prefix%20foaf%3A%20%20<http%3A%2F%2Fxmlns.com%2Ffoaf%2F0.1%2F>%20.%0A%0A%3Aalice%20%20a%20%20%20%20%20%20%20foaf%3APerson%20.%0A%0A%3Abob%20%20%20%20a%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20foaf%3APerson%20%3B%0A%20%20%20%20%20%20%20%20schema%3AbirthDate%20%20%20%20%20"1990-07-04"%5E%5Exsd%3Adate%20%3B%0A%20%20%20%20%20%20%20%20foaf%3Aknows%20%20%20%20%20%20%20%20%20%20%20%3Aalice%20%3B%0A%20%20%20%20%20%20%20%20foaf%3Atopic_interest%20%20wd%3AQ12418%20.%0A%0A%3Acarol%20%20a%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20foaf%3APerson%20%3B%0A%20%20%20%20%20%20%20%20schema%3AbirthDate%20%20"unknown"%20.%0A%0Awd%3AQ12418%20%20dcterms%3Acreator%20%20dbr%3ALeonardo_da_Vinci%20%3B%0A%20%20%20%20%20%20%20%20dcterms%3Atitle%20%20%20%20"Mona%20Lisa"%20.%0A%0Ait%3A243FA%20%20dcterms%3Asubject%20%20wd%3AQ12418%20%3B%0A%20%20%20%20%20%20%20%20dcterms%3Atitle%20%20%20%20"La%20Joconde%20à%20Washington"%40fr%20.&dataFormat=TURTLE&schema=prefix%20schema%3A%20<http%3A%2F%2Fschema.org%2F>%20%0Aprefix%20xsd%3A%20%20%20<http%3A%2F%2Fwww.w3.org%2F2001%2FXMLSchema%23>%20%0Aprefix%20dcterms%3A%20<http%3A%2F%2Fpurl.org%2Fdc%2Fterms%2F>%20%0Aprefix%20it%3A%20%20%20%20<http%3A%2F%2Fdata.europeana.eu%2Fitem%2F>%20%0Aprefix%20foaf%3A%20%20<http%3A%2F%2Fxmlns.com%2Ffoaf%2F0.1%2F>%20%0A%0A<User>%20IRI%20%7B%20%0A%20a%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5B%20foaf%3APerson%20%5D%3B%20%0A%20schema%3AbirthDate%20%20%20%20%20xsd%3Adate%3F%20%20%3B%0A%20foaf%3Aknows%20%20%20%20%20%20%20%20%20%20%20%40<User>*%20%3B%0A%20foaf%3Atopic_interest%20%20%40<Topic>%7B0%2C10%7D%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0A%7D%0A%0A<Topic>%20%7B%0A%20%20dcterms%3Atitle%20%20%20xsd%3Astring%20%3B%0A%20%20dcterms%3Acreator%20IRI%20%3B%0A%20%20%5Edcterms%3Asubject%20%40<Item>%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0A%7D%0A%0A<Item>%20%7B%0A%20%20dcterms%3Atitle%20%5B%40en%20%40fr%20%40es%5D%20%3B%0A%7D&schemaFormat=ShExC&schemaEngine=ShEx&triggerMode=ShapeMap&schemaEmbedded=false&inference=NONE&activeDataTab=%23dataTextArea&activeSchemaTab=%23schemaTextArea&activeShapeMapTab=%23shapeMapTextArea&&shapeMap=%3Abob%40<User>%2C%3Acarol%40<User>'>
                ShEx validation (example from paper)
              </NavDropdown.Item>
              <NavDropdown.Item href='/shaclValidate?activeSchemaTab=%23schemaTextArea&activeTab=%23dataTextArea&data=%40prefix%20%3A%20%20%20%20%20%20%20<http%3A%2F%2Fexample.org%2F>%20.%0A%40prefix%20sh%3A%20%20%20%20%20<http%3A%2F%2Fwww.w3.org%2Fns%2Fshacl%23>%20.%0A%40prefix%20xsd%3A%20%20%20%20<http%3A%2F%2Fwww.w3.org%2F2001%2FXMLSchema%23>%20.%0A%40prefix%20schema%3A%20<http%3A%2F%2Fschema.org%2F>%20.%0A%40prefix%20foaf%3A%20%20%20<http%3A%2F%2Fxmlns.com%2Ffoaf%2F0.1%2F>%20.%0A%40prefix%20rdfs%3A%20%20%20<http%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23>%20.%0A%20%20%20%20%20%20%20%20%0A%0A%3Aalice%20a%20%3AUser%3B%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%23%25%2A%5CPasses%7B%3AUserShape%7D%20%2A%29%20%20%20%20%20%0A%20%20%20%20%20%20%20schema%3Aname%20%20%20%20%20%20%20%20%20%20%20"Alice"%20%3B%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20schema%3Agender%20%20%20%20%20%20%20%20%20schema%3AFemale%20%3B%0A%20%20%20%20%20%20%20schema%3Aknows%20%20%20%20%20%20%20%20%20%20%3Abob%20.%0A%0A%3Abob%20%20%20a%20%3AUser%3B%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%23%25%2A%5CPasses%7B%3AUserShape%7D%20%2A%29%20%20%20%20%20%0A%20%20%20%20%20%20%20schema%3Agender%20%20%20%20%20%20%20%20%20schema%3AMale%20%3B%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20schema%3Aname%20%20%20%20%20%20%20%20%20%20%20"Robert"%3B%0A%20%20%20%20%20%20%20schema%3AbirthDate%20%20%20%20%20%20"1980-03-10"%5E%5Exsd%3Adate%20.%0A%0A%3Acarol%20a%20%3AUser%3B%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%23%25%2A%5CPasses%7B%3AUserShape%7D%20%2A%29%20%20%20%20%20%0A%20%20%20%20%20%20%20schema%3Aname%20%20%20%20%20%20%20%20%20%20%20"Carol"%20%3B%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20schema%3Agender%20%20%20%20%20%20%20%20%20schema%3AFemale%20%3B%20%20%0A%20%20%20%20%20%20%20foaf%3Aname%20%20%20%20%20%20%20%20%20%20%20%20%20"Carol"%20.%0A&dataFormat=TURTLE&dataFormatTextArea=TURTLE&inference=None&schema=%40prefix%20%3A%20%20%20%20%20%20%20<http%3A%2F%2Fexample.org%2F>%20.%0A%40prefix%20sh%3A%20%20%20%20%20<http%3A%2F%2Fwww.w3.org%2Fns%2Fshacl%23>%20.%0A%40prefix%20xsd%3A%20%20%20%20<http%3A%2F%2Fwww.w3.org%2F2001%2FXMLSchema%23>%20.%0A%40prefix%20schema%3A%20<http%3A%2F%2Fschema.org%2F>%20.%0A%40prefix%20foaf%3A%20%20%20<http%3A%2F%2Fxmlns.com%2Ffoaf%2F0.1%2F>%20.%0A%40prefix%20rdfs%3A%20%20%20<http%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23>%20.%0A%20%20%20%20%20%20%20%20%0A%3AUserShape%20a%20sh%3ANodeShape%3B%0A%20%20%20sh%3AtargetClass%20%3AUser%20%3B%0A%20%20%20sh%3Aproperty%20%5B%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%23%20Blank%20node%201%0A%20%20%20%20sh%3Apath%20%20%20%20%20schema%3Aname%20%3B%20%0A%20%20%20%20sh%3AminCount%201%3B%20%0A%20%20%20%20sh%3AmaxCount%201%3B%0A%20%20%20%20sh%3Adatatype%20xsd%3Astring%20%3B%0A%20%20%5D%20%3B%0A%20%20sh%3Aproperty%20%5B%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%23%20Blank%20node%202%0A%20%20%20sh%3Apath%20schema%3Agender%20%3B%0A%20%20%20sh%3AminCount%201%3B%0A%20%20%20sh%3AmaxCount%201%3B%0A%20%20%20sh%3Aor%20%28%0A%20%20%20%20%5B%20sh%3Ain%20%28schema%3AMale%20schema%3AFemale%29%20%5D%0A%20%20%20%20%5B%20sh%3Adatatype%20xsd%3Astring%5D%0A%20%20%20%29%0A%20%20%5D%20%3B%0A%20%20sh%3Aproperty%20%5B%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%23%20Blank%20node%203%20%20%0A%20%20%20sh%3Apath%20%20%20%20%20schema%3AbirthDate%20%3B%20%0A%20%20%20sh%3AmaxCount%201%3B%20%0A%20%20%20sh%3Adatatype%20xsd%3Adate%20%3B%0A%20%20%5D%20%3B%0A%20%20sh%3Aproperty%20%5B%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%23%20Blank%20node%204%20%0A%20%20%20sh%3Apath%20%20%20%20%20schema%3Aknows%20%3B%20%0A%20%20%20sh%3AnodeKind%20sh%3AIRI%20%3B%0A%20%20%20sh%3Aclass%20%20%20%20%3AUser%20%3B%0A%20%20%5D%20.%0A&schemaEmbedded=false&schemaEngine=JenaSHACL&schemaFormat=TURTLE&schemaFormatTextArea=TURTLE&triggerMode=targetDecls'>
                SHACL validation (example from book)
              </NavDropdown.Item>
              <NavDropdown.Item href='shaclValidate?data=%40prefix%20%3A%20%20%20%20%20%20%20<http%3A%2F%2Fexample.org%2F>%20.%0A%40prefix%20sh%3A%20%20%20%20%20<http%3A%2F%2Fwww.w3.org%2Fns%2Fshacl%23>%20.%0A%40prefix%20xsd%3A%20%20%20%20<http%3A%2F%2Fwww.w3.org%2F2001%2FXMLSchema%23>%20.%0A%40prefix%20schema%3A%20<http%3A%2F%2Fschema.org%2F>%20.%0A%40prefix%20foaf%3A%20%20%20<http%3A%2F%2Fxmlns.com%2Ffoaf%2F0.1%2F>%20.%0A%40prefix%20rdfs%3A%20%20%20<http%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23>%20.%0A%20%20%20%20%20%20%20%20%0A%0A%3Aalice%20a%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3AUser%20%3B%20%20%20%20%20%20%20%20%20%20%23Passes%20as%20a%20%3AUserShape%20%0A%20%20%20%20%20%20%20schema%3AgivenName%20%20"Alice"%20%3B%0A%20%20%20%20%20%20%20schema%3AfamilyName%20"Cooper"%20%3B%0A%20%20%20%20%20%20%20schema%3Aname%20%20%20%20%20%20%20"Alice%20Cooper"%20.%0A%0A%3Abob%20%20%20a%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3AUser%20%3B%20%20%20%20%20%20%20%20%20%20%23Fails%20as%20a%20%3AUserShape%20%0A%20%20%20%20%20%20%20schema%3AgivenName%20%20"Bob"%20%3B%0A%20%20%20%20%20%20%20schema%3AfamilyName%20"Smith"%20%3B%0A%20%20%20%20%20%20%20schema%3Aname%20%20%20%20%20%20%20"Robert%20Smith"%20.&dataFormat=TURTLE&inference=None&schema=%40prefix%20%3A%20%20%20%20%20%20%20<http%3A%2F%2Fexample.org%2F>%20.%0A%40prefix%20sh%3A%20%20%20%20%20<http%3A%2F%2Fwww.w3.org%2Fns%2Fshacl%23>%20.%0A%40prefix%20xsd%3A%20%20%20%20<http%3A%2F%2Fwww.w3.org%2F2001%2FXMLSchema%23>%20.%0A%40prefix%20schema%3A%20<http%3A%2F%2Fschema.org%2F>%20.%0A%40prefix%20foaf%3A%20%20%20<http%3A%2F%2Fxmlns.com%2Ffoaf%2F0.1%2F>%20.%0A%40prefix%20rdfs%3A%20%20%20<http%3A%2F%2Fwww.w3.org%2F2000%2F01%2Frdf-schema%23>%20.%0A%0A%3AUserShape%20a%20sh%3ANodeShape%20%3B%0A%20%20sh%3AtargetClass%20%3AUser%20%3B%0A%20%20sh%3Asparql%20%5B%0A%20%20%20a%20%20%20%20%20%20%20%20%20%20sh%3ASPARQLConstraint%20%3B%0A%20%20%20sh%3Amessage%20"schema%3Aname%20must%20equal%20schema%3AgivenName%2Bschema%3AfamilyName"%3B%0A%20%20%20sh%3Aprefixes%20%5B%0A%20%20%20%20%20sh%3Adeclare%20%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20sh%3Aprefix%20%20%20%20"schema"%20%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20sh%3Anamespace%20"http%3A%2F%2Fschema.org%2F"%5E%5Exsd%3AanyURI%20%3B%0A%20%20%20%20%20%20%20%20%5D%0A%20%20%20%5D%20%3B%0A%20%20%20sh%3Aselect%0A%20%20%20%20"""SELECT%20%24this%20%28schema%3Aname%20AS%20%3Fpath%29%20%28%3Fname%20as%20%3Fvalue%29%0A%20%20%20%20%20%20%20WHERE%20%7B%0A%20%20%20%20%20%20%20%20%20%24this%20schema%3Aname%20%20%20%20%20%20%20%3Fname%20.%0A%20%20%20%20%20%20%20%20%20%24this%20schema%3AgivenName%20%20%3FgivenName%20.%0A%20%20%20%20%20%20%20%20%20%24this%20schema%3AfamilyName%20%3FfamilyName%20.%0A%20%20%20%20%20%20%20%20%20FILTER%20%28%21isLiteral%28%3Fvalue%29%20%7C%7C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%21isLiteral%28%3FgivenName%29%20%7C%7C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%21isLiteral%28%3FfamilyName%29%20%7C%7C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20concat%28str%28%3FgivenName%29%2C%20%27%20%27%2C%20str%28%3FfamilyName%29%29%21%3D%3Fname%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%29%0A%20%20%20%20%7D"""%20%3B%0A%20%5D%20.&schemaEngine=JenaSHACL&schemaFormat=TURTLE&triggerMode=targetDecls'>
                SHACL-SPARQL example from book (Jena SHACL)
              </NavDropdown.Item>

              <NavDropdown.Item href="/dataVisualize?activeTab=%23dataTextArea&data=%3Cdiv%20itemscope%20itemtype%3D%22http%3A%2F%2Fschema.org%2FInvoice%22%3E%0A%20%20%3Ch1%20itemprop%3D%22description%22%3EExample%3C%2Fh1%3E%0A%20%20%3Ca%20itemprop%3D%22url%22%20href%3D%22http%3A%2F%2Facmebank.com%2Finvoice.pdf%22%3EPDF%3C%2Fa%3E%0A%20%20%3Cdiv%20itemprop%3D%22broker%22%20itemscope%20itemtype%3D%22http%3A%2F%2Fschema.org%2FBankOrCreditUnion%22%3E%0A%20%20%20%20%3Cb%20itemprop%3D%22name%22%3EACME%20Bank%3C%2Fb%3E%0A%20%20%3C%2Fdiv%3E%0A%20%20%3Cspan%20itemprop%3D%22accountId%22%3Exxxx-1234%3C%2Fspan%3E%0A%20%20%3Cdiv%20itemprop%3D%22customer%22%20itemscope%20itemtype%3D%22http%3A%2F%2Fschema.org%2FPerson%22%3E%0A%20%20%20%20%3Cb%20itemprop%3D%22name%22%3EJane%20Doe%3C%2Fb%3E%0A%20%20%3C%2Fdiv%3E%0A%20%20%3Ctime%20itemprop%3D%22paymentDueDate%22%3E2015-01-30%3C%2Ftime%3E%0A%20%20%3Cdiv%20itemprop%3D%22minimumPaymentDue%22%20itemscope%20itemtype%3D%22http%3A%2F%2Fschema.org%2FPriceSpecification%22%3E%0A%20%20%20%20%3Cspan%20itemprop%3D%22price%22%3E15.00%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20itemprop%3D%22priceCurrency%22%3EUSD%3C%2Fspan%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Fdiv%3E&dataFormat=html-microdata&dataFormatTextArea=html-microdata&inference=None&targetDataFormat=SVG&targetGraphFormat=SVG">
                HTML (Microdata) visualization
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Help"
              id="basic-nav-dropdown"
              className="mr-sm-2"
            >
              <NavDropdown.Item href="https://app.swaggerhub.com/apis-docs/labra/rdfshape/1.0.1">
                API Docs
              </NavDropdown.Item>
              <NavDropdown.Item href="https://github.com/labra/rdfshape/wiki/RDFShape---Help">
                Help
              </NavDropdown.Item>
              <NavDropdown.Item href="/about">About</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default RDFShapeNavbar;

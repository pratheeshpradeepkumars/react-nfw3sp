import React, { Component } from 'react';
import { render } from 'react-dom';
import Form from './Form';
import './style.css';
const data = [
  {
    "type": "section",
    "displayName": "Basic Information",
    "subsections": [
      {
        "type": "subsection",
        "displayName": "Demographics",
        "groups": [
          {
            "type": "group",
            "displayName": "",
            "fields": [
              {
                "currentFieldType": "radio",
                "fieldID": "general_clienttype_02",
                "fieldName": "Type of client",
                "defaultValues": "Medical Client,Non Medical Client"
              }
            ]
          },
          {
            "type": "group",
            "displayName": "Client information",
            "fields": [
              {
                "currentFieldType": "text-box",
                "fieldName": "First Name",
                "fieldID": "demographics_fname_03",
                "defaultValues": ""
              }
            ]
          }
        ]
      }
    ]
  }
];
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Form data={data} />
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));

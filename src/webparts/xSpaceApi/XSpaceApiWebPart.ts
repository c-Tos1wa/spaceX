import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'XSpaceApiWebPartStrings';
import XSpaceApi from './components/XSpaceApi';
import { IXSpaceApiProps } from './components/IXSpaceApiProps';
import { HttpClient, HttpClientResponse } from '@microsoft/sp-http';

export interface IXSpaceApiWebPartProps {
  description: string;
}

export default class XSpaceApiWebPart extends BaseClientSideWebPart<IXSpaceApiWebPartProps> {

  public render(): void {
    if(!this.renderedOnce) {
      this._getSpaceApi()
        .then(response => {
          const element: React.ReactElement<IXSpaceApiProps> = React.createElement(
            XSpaceApi,
            {
              history: response
            }
          );
          ReactDom.render(element, this.domElement);
        });
    }

  }

  private _getSpaceApi(): Promise<any>{
    return this.context.httpClient.get(
      'https://api.spacexdata.com/v4/history',
      HttpClient.configurations.v1
    )
    .then((response: HttpClientResponse) => {
      return response.json();
    })
    .then(jsonResponse => {
      return jsonResponse;
    }) as Promise<any>;
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}

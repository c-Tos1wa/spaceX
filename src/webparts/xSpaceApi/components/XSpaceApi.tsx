import * as React from 'react';
import styles from './XSpaceApi.module.scss';
import { IXSpaceApiProps } from './IXSpaceApiProps';
import { HttpClient, HttpClientResponse } from '@microsoft/sp-http';


export default class XSpaceApi extends React.Component<IXSpaceApiProps, {}> {
  
  public render(): React.ReactElement<IXSpaceApiProps> {
    return (
      
      <div className={ styles.xSpaceApi }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SpaceX Api</span>
            </div>
          </div>
          <div className={styles.row}>
            <div>Title:{this.props.history.title}</div>
          </div>
        </div>
      </div>

    );
  }
}




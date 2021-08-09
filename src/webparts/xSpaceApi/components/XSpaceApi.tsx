import * as React from 'react';
import styles from './XSpaceApi.module.scss';
import { IXSpaceApiProps } from './IXSpaceApiProps';


export default class XSpaceApi extends React.Component<IXSpaceApiProps, {}> {
  
  public render(): React.ReactElement<IXSpaceApiProps> {
    return (
      
      <div className={ styles.xSpaceApi }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SpaceX History</span>
            </div>
          </div>
          <div className={styles.row}>
            <div><strong>Title:</strong>{this.props.history[0].title}</div>
            <div><strong>Details:</strong>{this.props.history[0].details}</div>
            <div><strong>Article:</strong>{this.props.history[0].links.article}</div>
          </div>
          <div className={styles.row}>
            <div><strong>Title:</strong>{this.props.history[7].title}</div>
            <div><strong>Details:</strong>{this.props.history[7].details}</div>
            <div><strong>Article:</strong>{this.props.history[7].links.article}</div>
          </div>
          <div className={styles.row}>
            <div><strong>Title:</strong>{this.props.history[14].title}</div>
            <div><strong>Details:</strong>{this.props.history[14].details}</div>
            <div><strong>Article:</strong>{this.props.history[14].links.article}</div>
          </div>
        </div>
      </div>

    );
  }
}




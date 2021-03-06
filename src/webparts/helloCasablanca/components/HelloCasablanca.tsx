import * as React from 'react';
import styles from './HelloCasablanca.module.scss';
import { IHelloCasablancaProps } from './IHelloCasablancaProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class HelloCasablanca extends React.Component<IHelloCasablancaProps, {}> {
  public render(): React.ReactElement<IHelloCasablancaProps> {
    return (
      <div className={ styles.helloCasablanca }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to aMS Community!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

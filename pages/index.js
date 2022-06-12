import { Component } from "@angular/core";

@Component({
  selector: "my-component",
  template: `
    <div  gridRowWidth="25%"  class="div"  [items]='[{
      title: [{
        '@type': '@builder.io/sdk:Element',
        '@version': 2,
        id: 'builder-d26fea90b4ca4edf9c8c7fcc5b688ca4',
        component: {
          name: 'Core:Button',
          options: {
            text: 'Click me!'
          }
        },
        responsiveStyles: {
          large: {
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            flexShrink: '0',
            boxSizing: 'border-box',
            marginTop: '20px',
            appearance: 'none',
            paddingTop: '15px',
            paddingBottom: '15px',
            paddingLeft: '25px',
            paddingRight: '25px',
            backgroundColor: '#3898EC',
            color: 'white',
            borderRadius: '4px',
            textAlign: 'center',
            cursor: 'pointer'
          }
        }
      }, {
        '@type': '@builder.io/sdk:Element',
        '@version': 2,
        layerName: 'Accordion item title',
        id: 'builder-37440a75c2d841e385e9ed97e2cb9595',
        responsiveStyles: {
          large: {
            marginTop: '10px',
            position: 'relative',
            display: 'flex',
            alignItems: 'stretch',
            flexDirection: 'column',
            paddingBottom: '10px'
          }
        }
      }],
      detail: [{
        '@type': '@builder.io/sdk:Element',
        '@version': 2,
        id: 'builder-d7567ebab76b4de498634560f4c22ac1',
        component: {
          name: 'Core:Section',
          options: {
            maxWidth: 1200
          }
        },
        children: [{
          '@type': '@builder.io/sdk:Element',
          '@version': 2,
          id: 'builder-1cb94a5f8b2d4353963b0bedafe9810a',
          component: {
            name: 'Text',
            options: {
              text: "<p><b>I am a section! My content keeps from getting too wide, so that it's easy to read even on big screens.</b></p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>"
            }
          },
          responsiveStyles: {
            large: {
              textAlign: 'center'
            }
          }
        }],
        responsiveStyles: {
          large: {
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            flexShrink: '0',
            boxSizing: 'border-box',
            marginTop: '0px',
            paddingLeft: '20px',
            paddingRight: '20px',
            paddingTop: '50px',
            paddingBottom: '50px',
            width: '100vw',
            marginLeft: 'calc(50% - 50vw)'
          }
        }
      }, {
        '@type': '@builder.io/sdk:Element',
        '@version': 2,
        layerName: 'Accordion item detail',
        id: 'builder-08509f0ece634ca08832b28f78b0c347',
        responsiveStyles: {
          large: {
            position: 'relative',
            display: 'flex',
            alignItems: 'stretch',
            flexDirection: 'column',
            marginTop: '10px',
            paddingBottom: '10px'
          }
        }
      }]
    }, {
      title: [{
        '@type': '@builder.io/sdk:Element',
        '@version': 2,
        layerName: 'Accordion item title',
        id: 'builder-459ae00e97c0458ea99c457ea48565e5',
        responsiveStyles: {
          large: {
            marginTop: '10px',
            position: 'relative',
            display: 'flex',
            alignItems: 'stretch',
            flexDirection: 'column',
            paddingBottom: '10px'
          }
        }
      }],
      detail: [{
        '@type': '@builder.io/sdk:Element',
        '@version': 2,
        layerName: 'Accordion item detail',
        id: 'builder-d357bfa098cd489ba7171bcc1f25c133',
        responsiveStyles: {
          large: {
            position: 'relative',
            display: 'flex',
            alignItems: 'stretch',
            flexDirection: 'column',
            marginTop: '10px',
            paddingBottom: '10px'
          }
        }
      }]
    }]'  [animate]='true' ><div ><div  builder="accordion" ><div  builder="accordion-title" ><span  builder-id="builder-d26fea90b4ca4edf9c8c7fcc5b688ca4"  innerHTML="Click me!"  class="span" ></span>
    <div  builder-id="builder-37440a75c2d841e385e9ed97e2cb9595"  class="accordion-item-title" ></div></div>
    <div  builder="accordion-detail" ><div  builder-id="builder-d7567ebab76b4de498634560f4c22ac1"  class="div-2"  [maxWidth]='1200' ><section  builder-id="builder-d7567ebab76b4de498634560f4c22ac1"  class="section" ><div  class="div-3" ><div  innerHTML="<p><b>I am a section! My content keeps from getting too wide, so that it's easy to read even on big screens.</b></p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>"  class="builder-text"  [innerHTML]=""  ></div></div></section></div>
    <div  builder-id="builder-08509f0ece634ca08832b28f78b0c347"  class="accordion-item-detail" ></div></div></div>
    <div  builder="accordion" ><div  builder="accordion-title" ><div  builder-id="builder-459ae00e97c0458ea99c457ea48565e5"  class="accordion-item-title" ></div></div>
    <div  builder="accordion-detail" ><div  builder-id="builder-d357bfa098cd489ba7171bcc1f25c133"  class="accordion-item-detail" ></div></div></div></div></div>
  `,
  styles: [
    `
      .div {
        display: flex;
        flex-direction: column;
        position: relative;
        margin-top: 20px;
      }
      .span {
        display: flex;
        flex-direction: column;
        position: relative;
        margin-top: 20px;
        appearance: none;
        padding-top: 15px;
        padding-bottom: 15px;
        padding-left: 25px;
        padding-right: 25px;
        background-color: #3898EC;
        color: white;
        border-radius: 4px;
        text-align: center;
        cursor: pointer;
      }
      .accordion-item-title {
        margin-top: 10px;
        position: relative;
        display: flex;
        flex-direction: column;
        padding-bottom: 10px;
      }
      .div-2 {
        display: flex;
        flex-direction: column;
        position: relative;
        margin-top: 0px;
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 50px;
        padding-bottom: 50px;
        width: 100vw;
        margin-left: calc(50% - 50vw);
      }
      .section {
        width: 100%;
        align-self: stretch;
        flex-grow: 1;
        max-width: 1200px;
        display: flex;
        flex-direction: column;
        margin-left: auto;
        margin-right: auto;
      }
      .div-3 {
        text-align: center;
      }
      .accordion-item-detail {
        position: relative;
        display: flex;
        flex-direction: column;
        margin-top: 10px;
        padding-bottom: 10px;
      }
    `,
  ],
})
export default class MyComponent {}

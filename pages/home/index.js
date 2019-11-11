import { Component } from 'react';
import {Button} from 'antd';
import Link from 'next/link';
import { FormattedMessage,injectIntl, intlShape  } from 'react-intl';
import React,{Fragment} from 'react'

class Home extends Component {
    static propTypes = {
        intl: intlShape.isRequired
    }

    static getInitialProps = async () =>{
        return {}
    }

    render() {
        return (
            <Fragment>
                <FormattedMessage id="home.title"/>
                <br/>
                <Link href="/home?lang=zh-CN"><Button>ABC</Button></Link>
                <Link href="/home?lang=en-US"><Button>ABC</Button></Link>
            </Fragment>
        );
    }
}

export default injectIntl(Home)

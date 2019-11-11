import { Component } from 'react';
import {Button} from 'antd';
import Link from 'next/link';
import { FormattedMessage,injectIntl, intlShape  } from 'react-intl';
import Aux from "../../src/components/hoc/Aux";
import React from 'react'

class Home extends Component {
    static propTypes = {
        intl: intlShape.isRequired
    }

    static getInitialProps = async () =>{
        return {}
    }

    render() {
        return (
            <Aux>
                <FormattedMessage id="home.title"/>
                <br/>
                <Link href="/home?lang=zh-CN"><Button>ABC</Button></Link>
                <Link href="/home?lang=en-US"><Button>ABC</Button></Link>
            </Aux>
        );
    }
}

export default injectIntl(Home)

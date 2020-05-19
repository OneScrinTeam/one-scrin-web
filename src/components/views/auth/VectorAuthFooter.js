/* eslint-disable linebreak-style */
/*
Copyright 2015, 2016 OpenMarket Ltd
Copyright 2019 New Vector Ltd

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import React from 'react';
import SdkConfig from 'matrix-react-sdk/src/SdkConfig';
import { _t } from 'matrix-react-sdk/src/languageHandler';

const VectorAuthFooter = () => {
    const brandingConfig = SdkConfig.get().branding;
    let links = [
        {"text": "Blog", "url": "https://medium.com/@onescrin"},
        {"text": "Twitter", "url": "https://twitter.com/onescrin"},
        {"text": "Github", "url": "https://github.com/OneScrinTeam/one-screen-web"},
        {"text": "LinkedIn", "url": "https://www.linkedin.com/mwlite/company/onescrin"},
    ];

    if (brandingConfig && brandingConfig.authFooterLinks) {
        links = brandingConfig.authFooterLinks;
    }

    const authFooterLinks = [];
    for (const linkEntry of links) {
        authFooterLinks.push(
            <a href={linkEntry.url} key={linkEntry.text} target="_blank" rel="noreferrer noopener">
                {linkEntry.text}
            </a>,
        );
    }

    return (
        <div className="mx_AuthFooter">
            {/* {authFooterLinks}
            <a href="https://onescrin.citural.com.ng" target="_blank" rel="noreferrer noopener">{ _t('Powered by OneScrin') }</a> */}
        </div>
    );
};

VectorAuthFooter.replaces = 'AuthFooter';

export default VectorAuthFooter;

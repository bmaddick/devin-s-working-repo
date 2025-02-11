const path = require('path');

const config = {
    'po.gen.language':
        'ar ar_AE ar_BH ar_EG ar_KW ar_MA ar_OM ar_QA ar_SA bn cs da da_DK de de_AT de_BE de_CH de_DE de_LU el en en_AE en_AQ en_AU en_BE en_BH en_CA en_CH en_EG en_GB en_HK en_ID en_IE en_IN en_KW en_LU en_MA en_MY en_NG en_NZ en_OM en_PH en_PK en_QA en_SA en_SG en_TH en_US en_VN en_ZA es es_AR es_CL es_CO es_CR es_EC es_ES es_MX es_PA es_PE es_US es_UY es_VE fi fi_FI fr fr_BE fr_CA fr_CH fr_FR fr_LU fr_MA he he_IL hi hl hm hu id in it it_CH it_IT iw iw_IL ja ja_JP kn ko ko_KR mr ms nl nl_BE nl_NL no pl pl_PL pt pt_BR pt_PT ro ru ru_UA sv sv_FI sv_SE ta te th tr uk uk_UA vi zh zh_CN zh_HK zh_SG zh_TW',
    'po.parse.jsp': 'false',
    'po.parse.soy': 'false',
    'po.parse.ts': 'true',
    'po.parse.js': 'true',
    'po.parse.tsx': 'true',
    'po.parse.java': 'false',
    'use.fuzzy.strings': 'true',
    'po.parse.js.dir': path.resolve('src'),
    'po.parse.ts.dir': path.resolve('src'),
    'gettext.src.dir': path.resolve('src/i18n'),
    'i18n.js.dir': path.resolve('src/i18n/js'),
    'i18n.js.module': 'true',
    'i18n.js.optimize': 'true',
    'i18n.js.client.noObsolete': 'true'
};

module.exports = config;

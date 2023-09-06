import Uppy from "@uppy/core"
import Dashboard from "@uppy/dashboard"
import XHRUPload from "@uppy/xhr-upload"
import GoogleDrive from '@uppy/google-drive';
import Dropbox from '@uppy/dropbox';
import Tus from '@uppy/tus'

import '@uppy/core/dist/style.css'
import '@uppy/dashboard/dist/style.css'

const uppy = new Uppy({
    debug: true,
    autoProceed: false,
})

uppy.use(Dashboard, {
    inline: true,
    target: 'body',
    plugins: [],
})

uppy.use(Tus, {
    endpoint: 'https://tusd.tusdemo.net/files/'
})

uppy.use(GoogleDrive, {
    target: Dashboard,
    companionUrl: 'https://your-companion.com',
});

uppy.use(Dropbox, {
    target: Dashboard,
    companionUrl: 'https://your-companion.com',
    key: '7uplvfgzggcw427',
    secret: 'q8mubatwpv3ikkx',
});
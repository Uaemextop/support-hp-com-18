/*
 * (C) Copyright 2019-2026 HP Development Company, L.P. Confidential
 * computer software. Valid license from HP required for possession,
 * use or copying. Consistent with FAR 12.211 and 12.212, Commercial
 * Computer Software, Computer Software Documentation, and Technical
 * Data for Commercial Items are licensed to the U.S. Government
 * under vendor's standard commercial license.
 */

/*
  This module can be used via a non-cached URL to inject into the
  web page the script directive needed to load the latest bundle
  version released by the team, using a cached URL.
 */

/*
  THIS FILE IS NOT TO BE MINIFIED !!!
*/

const LAST_VERSION = '260310.1'
const importUrl = import.meta.url
const asURL = new URL(importUrl)

let url = asURL.origin + asURL.pathname
let module = 'main'
let search = asURL.search
if (search) {
  search = search.toLowerCase()
  switch (search) {
    case '?veneer':
      module = 'veneer'
      break
    case '?app':
      module = 'app'
      break
  }
}

url = url.replace(/latest\.js/, `resources/releases/${module}.${LAST_VERSION}.js`)
url = url.replace(/\/(my)?account\.stg/, '/static-myaccount.stg')
url = url.replace(/\/(my)?account\.id/, '/static-account.id')

const script = document.createElement('script')
script.type = 'text/javascript'
script.src = url
script.type = 'module'
document.head.appendChild(script)

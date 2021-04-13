import 'lazysizes/plugins/object-fit/ls.object-fit'
import 'lazysizes/plugins/parent-fit/ls.parent-fit'
import 'lazysizes/plugins/rias/ls.rias'
import 'lazysizes/plugins/bgset/ls.bgset'
import 'lazysizes'
import 'lazysizes/plugins/respimg/ls.respimg'

import '../../styles/theme.scss'
import '../../styles/theme.scss.liquid'

// vendors
import '../vendors/jquery.validate'
import '../vendors/jquery.maskedinput.min'

// modules
import '../modules/form-validation'

import { focusHash } from '@shopify/theme-a11y'
import { cookieEnabled } from '../vendors/utils'

// Common a11y fixes
focusHash()

// Apply a specific class to the html element for browser support of cookies.
if (cookieEnabled()) {
  document.documentElement.className = document.documentElement.className.replace('supports-no-cookies', 'supports-cookies')
}

// modular code is splitting code over multiple files

import person from file1.js
import prs from file1.js
// the above imports the default export as the specified name which could be anything which in these examples are person & prs

import {base} from file2.js
import {clean} from file2.js
// the curly braces specify NAMED EXPORTS i.e. we import specific things by the exact name as there is no default export in file2
import {clean,base} from file2.js
// we can even import both of the exports together from file2 as specified 
import {base as b} from file2.js
// for NAMED EXPORTS we have to use the exact name as defined in the export but we can give it an alias
import * as bundled from file2.js
// for multiple named exports in a file we can import everything with the * operator and give it an alias which is bundled in this case that is nothing but the js object 
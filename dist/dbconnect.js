"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbconnect = void 0;
const node_process_1 = require("node:process");
const node_path_1 = require("node:path");
const supabase_js_1 = require("@supabase/supabase-js");
(0, node_process_1.loadEnvFile)((0, node_path_1.join)(__dirname, '.env'));
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
if (!supabaseUrl || !supabaseKey) {
    throw new Error('Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY in backend/.env');
}
exports.dbconnect = (0, supabase_js_1.createClient)(supabaseUrl, supabaseKey);
//# sourceMappingURL=dbconnect.js.map
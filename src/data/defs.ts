
const DFTAFields:FieldDef[] = [
    { name: 'DIST_FILE_TYPE_ADDR_ID', heading:'id', pk:true },
    { name: 'STATUS', heading:'sts' },
    { name: 'FILE_EXTENSION', heading:'ext' },
    { name: 'TARGET_PATH', heading:'path' },
    { name: 'RUN_MODE', heading:'run mode' },
    { name: 'RUN_PERIOD', heading:'period' },
    { name: 'TRANSFER_METHOD', heading:'method' },
    { name: 'TRANSFER_MODE', heading:'mode' },
    { name: 'NETWORK_ADDRESS', heading:'host' },
    { name: 'USER_ID', heading:'login' },
    { name: 'PASSWORD', heading:'pass' },
    { name: 'MAX_RETRIES', heading:'retries' },
    { name: 'RETRY_DELAY', heading:'delay' },
    { name: 'ADDITIONAL_PARAMETERS', heading:'params' },
    { name: 'CREATION_DATE', heading:'cr date' },
    { name: 'LAST_UPDATE_DATE', heading:'lu date' },
    { name: 'LAST_UPDATE_TIME', heading:'lu time ' },
    { name: 'LAST_USER_ID', heading:'lu user' },
// table view fields
    { name: 'id',       value: (r) => r.DIST_FILE_TYPE_ADDR_ID },
    { name: 'creds',    value: (r) => `${r.USER_ID}@${r.NETWORK_ADDRESS}` },
    { name: 'method',   value: (r) =>`${r.TRANSFER_METHOD}(${r.TRANSFER_MODE})` },
    { name: 'mode',     value: (r) => r.RUN_MODE === 'C' ? 'c' : `s(${r.RUN_PERIOD})` },
    { name: 'path',     value: (r) => r.TARGET_PATH },
    { name: 'ext',      value: (r) => r.FILE_EXTENSION },
]

export const DFTAMeta = new Meta(DFTAFields)

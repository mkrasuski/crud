import axios, { AxiosResponse } from "axios";
import { DFTADataSourceAdapter } from "../data/defs";
import { DataSourceAdapter } from "../data/adapter";

const BASE_URL = 'http://localhost:2999'

type SourceType = 'dfta'
type ServerCall = Promise<AxiosResponse>

export interface Api {
    adapter: DataSourceAdapter,
    list(): ServerCall
}

export function Api(type: SourceType): Api {

    const server = axios.create({
        baseURL: `${BASE_URL}/${type}`
    })

    const adapter = DFTADataSourceAdapter

    return {
        adapter, 
        list() {
            return server.get("/")
        },
    }
} 




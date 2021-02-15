
class Loader {
    constructor() {
       this._importObject = {
            env: {
                abort() {
                    throw new Error('Abort called from wasm file');
                }
            }
        };
    }

    async wasm(path, imports = this._importObject) {
        console.log(`fetching ${path}`);

        let _module;

        if (!loader.instantiateStreaming) {
            _module = await this.wasmFallback(path, imports);
        } else {
            _module = await this._wasmFallback(path, imports);
        }

        _module.exports;



    }

    async _wasm(path, imports = this._importObject) {
        return await loader.instantiateStreaming(fetch(path), imports);
    }

    async _wasmFallback(path, imports) {
        console.log('using fallback');
        const response = await fetch(path);
        const bytes = await response?.arrayBuffer();
        const _module = await loader.instantiate(bytes, imports);

        return _module;
    }
}

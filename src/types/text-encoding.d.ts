declare module 'text-encoding' {
    export class TextEncoder {
        constructor(label?: string);
        encode(input?: string): Uint8Array;
    }

    export class TextDecoder {
        constructor(label?: string, options?: { fatal?: boolean; ignoreBOM?: boolean });
        decode(input?: ArrayBuffer | ArrayBufferView, options?: { stream?: boolean }): string;
    }
}

import 'react-native-get-random-values';
import { TextEncoder as TextEncoderPolyfill, TextDecoder as TextDecoderPolyfill } from 'text-encoding';

if (typeof global.TextEncoder === 'undefined') {
    (global as any).TextEncoder = TextEncoderPolyfill;
}

if (typeof global.TextDecoder === 'undefined') {
    (global as any).TextDecoder = TextDecoderPolyfill;
}

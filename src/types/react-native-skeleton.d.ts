declare module '@thevsstech/react-native-skeleton' {
    import { Component } from 'react';
    import { ViewStyle } from 'react-native';

    export interface SkeletonProps {
        color?: string;
        highlightColor?: string;
        children?: React.ReactNode;
        style?: ViewStyle;
    }

    export default class Skeleton extends Component<SkeletonProps> { }
}

export default function OverlayComponent({ disposition, children }) {
    switch(disposition) {
        case 'loading':
            return <h1>loading...</h1>
        case 'error':
            return <div>Error loading contacts</div>
        case 'loaded':
            return children
    }
}
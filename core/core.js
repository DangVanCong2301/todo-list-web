export default function html([first,...strings],...values){
    return values.reduce(
        (acc,curr) => acc.concat(curr,strings.shift()),
        [first]
    )
    .filter(x => x && x !==true || x === 0)
    .join('')
}

export function createStore(reducer){
    let state = reducer()
    const roots = new Map()

    function render(){
        for(const[root,compnent] of roots){
            const output = compnent()
            root.innerHTML = output
        }
    }

    return {
        attach(compnent,root){
            roots.set(root,compnent)
            render()
        },
        connect(selector = state => state){
            return compnent => (props,...args) => 
                compnent(Object.assign({},props,selector(state),...args))
        },
        dispatch(action,...args){
            state = reducer(state, action,args )
            render()
        }
    }

}
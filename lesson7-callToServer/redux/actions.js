// export function addPupil(newPupil){
//     return {type:'ADD_PUPIL',payload:newPupil}
// }


function convertActionName(actionName){//addPupil
    return actionName.replace(/([A-Z])/g,"_$1").toUpperCase()//ADD_PUPIL
}

// let x=actions.addPupil({name:'ddd',id:'ffff'})
const actions = new Proxy(
    {},
    {
        get: function (target, prop) {//prop='addPupil'
            if (target[prop] === undefined)
                return function (args) {//args={name:'ddd',id:'ffff'}
                    return { type: convertActionName(prop), payload: args }
                }
            else return target[prop]
        }
    }
)
export default actions
//let x=actions.addPupil({name:'aa',id:''})
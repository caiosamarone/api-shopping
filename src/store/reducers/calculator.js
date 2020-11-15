export default function (state = 0, action){
    switch(action.type){
        case 'SUM':
            return action.payload[0] + payload[1];
        
        case 'SUB':
            return action.payload[0] - payload[1];

        default:
            return state;
    }
}
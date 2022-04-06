import pageInfo from "../data/pageInfo.json"

const pageReducer = (state = pageInfo, action) => {
    switch (action.type) {
        case 'change-highlight':
            return {
                active: action.highlight
            };
        default:
            return pageInfo;
    }
}
export default pageReducer;
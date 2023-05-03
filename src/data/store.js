import { reactive } from "vue";

export const store = reactive ({

    // originalApiUrl: "https://db.ygoprodeck.com/api/v7/cardinfo.php",
    apiUrl: "https://db.ygoprodeck.com/api/v7/cardinfo.php",
    resultArray: [],
    resultArrayAll: [],
    numCard : 25,
    offsetArray : 0,
    typeList : [],
    filterType : null,

})

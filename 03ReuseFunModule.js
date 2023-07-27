
// "Reusable Funtion" "Moduls" this can be calld in another file or program or user in his development ///

module.exports = {

    printf : function(arrObject){
        for (let i = 0; i < arrObject.length; i++) {
            const element = arrObject[i];
            console.log(element);
            
        }
    },
    getCount : function(arrName){
        console.log('Size of the arrey is ===> ' + arrName.length);
    },
    removeItem(arr1, index){
        return arr1.splice(index, 2);
    }
}

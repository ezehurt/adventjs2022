
const gifts = ['book', 'game', 'socks']


/**
* Given a gift, return the length for wrapping it.
* Will return the length of the string +2 '*' characters, one for right side and one for left
*
* @param gift string
* @returns string 
*/
const giftWrapLength = (gift) => {
 // + 1 for getting real length and +2 to wrap the gift (one for right side and wrap)
   return new Array(gift.length + 1 + 2 ).join("*");
} 

/**
* Given a list of gift will wrap them for christmas
*
* @param gift array of string
* @returns string 
*/
function wrapping(gifts) {
    return gifts.map((gift)=>{
        return `${giftWrapLength(gift)}\n*${gift}*\n${giftWrapLength(gift)}`
    })
    
}

const wrapped = wrapping(gifts)

console.log(wrapped)
const apikey = 'PSI6l4Uthss8avm-QFRXYqVBIwgYchiQZG0P6MHZWKKQqa0vWQe_XOszpjE-DGNJXIkp76KuD-i0LzvqskYePJe_7LDXbMeI9DGGI36Q6nn2JJmt-WDRsbDWfoKcX3Yx';

const Yelp = {};

const search = (term, location, sortBy) => {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {headers: {
        Authorization: `Bearer ${apikey}`
    }} ).then(response => {
        return response.json();
    }).then(jsonResponse => {
        if(jsonResponse.businesses){
           return jsonResponse.businesses.map(business => ({
            id: business.id,
            imageSrc: business.imageSrc,
            name: business.name,
            address: business.address,
            city: business.city,
            state: business.state,
            zipCode: business.zipCode,
            category: business.category,
            rating: business.rating,
            reviewCount: business.reviewCount
           }));
        }
    });
}

export default Yelp;
export default function checkIfCustomerExists(customerPhoneorEmail: any) {
    return fetch(
        `${process.env.SHOPIFY_API_KEY}:${process.env.SHOPIFY_API_PASSWORD}@codeword-playground.myshopify.com/admin/customers/search.json?query=${customerPhoneorEmail}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
    .then((response) => response.json())
    .then((data) => {
        if (data.customers.length > 0) {
        return data.customers[0].id;
        } else {
        return false;
        }
    });
  }
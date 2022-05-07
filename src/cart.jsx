// simulate getting products from DataBase
const products = [
    { name: "Berries", country: "Italy", cost: 3, instock: 1, picsum: 1080 },
    { name: "Onions", country: "USA", cost: 2, instock: 5, picsum: 292 },
    { name: "Coffee", country: "USA", cost: 1, instock: 4, picsum: 766 },
    { name: "Grapes", country: "Spain", cost: 4, instock: 3, picsum: 674 },
];

//=========Cart=============
const Cart = (props) => {
    const { Card, Accordion, Button } = ReactBootstrap;
    let data = props.location.data ? props.location.data : products;
    // console.log(`data:${JSON.stringify(data)}`);

    return <Accordion defaultActiveKey="0">{list}</Accordion>;
};

const useDataApi = (initialUrl, initialData) => {
    const { useState, useEffect, useReducer } = React;
    const [url, setUrl] = useState(initialUrl);

    const [state, dispatch] = useReducer(dataFetchReducer, {
        isLoading: false,
        isError: false,
        data: initialData,
    });

    console.log(`useDataApi called`);
    useEffect(() => {
        console.log("useEffect Called");
        let didCancel = false;
        // const fetchData = async () => {
        //     dispatch({ type: "FETCH_INIT" });
        //     try {
        //         const result = await axios(url);
        //         console.log("FETCH FROM URL");
        //         if (!didCancel) {
        //             dispatch({ type: "FETCH_SUCCESS", payload: result.json()});
        //         }
        //         console.log(result.data);
        //     } catch (error) {
        //         if (!didCancel) {
        //             dispatch({ type: "FETCH_FAILURE" });
        //         }
        //     }
        // };
        // fetchData();

    }, [url]);
    return [state, setUrl];
};

const dataFetchReducer = (state, action) => {
    switch (action.type) {
        case "FETCH_INIT":
            return {
                ...state,
                isLoading: true,
                isError: false,
            };
        case "FETCH_SUCCESS":
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload,
            };
        case "FETCH_FAILURE":
            return {
                ...state,
                isLoading: false,
                isError: true,
            };
        default:
            throw new Error();
    }
};

const Products = (props) => {
    const [items, setItems] = React.useState(products);
    const [cart, setCart] = React.useState([]);
    const [total, setTotal] = React.useState(0);
    const {
        Card,
        Accordion,
        Button,
        Container,
        Row,
        Col,
        Image,
        Input,
    } = ReactBootstrap;

    //  Fetch Data
    const { Fragment, useState, useEffect, useReducer } = React;
    const [query, setQuery] = useState("products");
    const [{ data, isLoading, isError }, doFetch] = useDataApi(
        // "http://localhost:1337/api/products",
        "https://urchin-app-evpgp.ondigitalocean.app/api/products",
        {
            data: [],
        }
    );

    // Fetch Data
    const addToCart = (e) => {
        let name = e.target.name;
        let item = items.filter((item) => item.name == name);
        if (item[0].instock == 0) return;
        item[0].instock = item[0].instock - 1;
        setCart([...cart, ...item]);
        doFetch(query);
    };

    const deleteCartItem = (index) => {
        let newCart = cart.filter((item, i) => index != i);
        let target = cart.filter((item, j) => index == j);
        let newItems = items.map((item, j) => {
            if (item.name == target[0].name) {
                item.instock = item.instock + 1;
            };
            return item;
        })
        setCart(newCart);
        setItems(newItems);
    };
    
    let list = items.map((item, index) => {
        let url = "https://picsum.photos/id/" + item.picsum + "/50/50";

        return (
            <li key={index}>
                <Image src={url} width={70} roundedCircle></Image>
                <Button variant="primary" size="large">
                    {item.name}: ${item.cost}<br/>(Qty: {item.instock})
                </Button>
                <button name={item.name} type="submit" onClick={addToCart}>Add</button>
            </li>
        );
    });

    let cartList = cart.map((item, index) => {
        return (
            <Card key={index}>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey={1 + index}>
                        {item.name}
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse
                    onClick={() => deleteCartItem(index)}
                    eventKey={1 + index}
                >
                    <Card.Body>
                        $ {item.cost} from {item.country}
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        );
    });

    let finalList = () => {
        let total = checkOut();
        let final = cart.map((item, index) => {
            return (
                <div key={index} index={index}>
                    {item.name}
                </div>
            );
        });
        return { final, total };
    };

    const checkOut = () => {
        let costs = cart.map((item) => item.cost);
        const reducer = (accum, current) => accum + current;
        let newTotal = costs.reduce(reducer, 0);
        return newTotal;
    };

    const restockProducts = (url) => {

        const getItem = (itemName) => {
            return items.find(item => item.name === itemName);
        }
        
        fetch(url, {
            method: 'GET',
            redirect: 'follow'
        })
        .then(response => response.json())
        .then(result => {
            console.log(result);
            let newItems = Object.keys(result.data).map((i) => {
                let { name, country, cost, instock, picsum } = result.data[i].attributes;
                return { name, country, cost, instock, picsum };
            });
            let restockedItems = newItems.map((item) => {
                let oldItem = getItem(item.name);
                if (oldItem) {
                    item.instock = item.instock + oldItem.instock;
                }
            });
            setItems([ ...newItems]);
        })
        .catch(error => console.log('error', error));
    };

    return (
        <Container>
            <Row>
                <Col>
                    <h1>Product List</h1>
                    <ul style={{ listStyleType: "none" }}>{list}</ul>
                </Col>
                <Col>
                    <h1>Cart Contents</h1>
                    <Accordion>{cartList}</Accordion>
                </Col>
                <Col>
                    <h1>CheckOut </h1>
                    <Button onClick={checkOut}>CheckOut $ {finalList().total}</Button>
                    <div> {finalList().total > 0 && finalList().final} </div>
                </Col>
            </Row>
            <Row>
                <form
                    onSubmit={(event) => {
                        event.preventDefault();
                        // console.log(`~Restock called on ${query}`);
                        // restockProducts(query);
                        // restockProducts(`http://localhost:1337/api/${query}`);
                        restockProducts(`https://urchin-app-evpgp.ondigitalocean.app/api/${query}`);
                    }}
                >
                    <input
                        type="text"
                        value={query}
                        onChange={(event) => setQuery(event.target.value)}
                    />
                    <button type="submit">ReStock Products</button>
                </form>
            </Row>
        </Container>
    );
};

// ========================================
ReactDOM.render(<Products />, document.getElementById("root"));
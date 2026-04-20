



// function for add product

const addProduct = (req, res) => {
    try {
        const { name, description, price, category, subCategory, sizes, bestseller } = req.body;

        const image1 = req.files?.image1?.[0] || null;
        const image2 = req.files?.image2?.[0] || null;
        const image3 = req.files?.image3?.[0] || null;
        const image4 = req.files?.image4?.[0] || null;
        const images = [image1, image2, image3, image4].filter(Boolean);

        if (!name || !description || !price || !category || !subCategory) {
            return res.json({ success: false, message: "Missing required product fields" });
        }

        if (images.length === 0) {
            return res.json({ success: false, message: "At least one product image is required" });
        }

        const parsedPrice = Number(price);
        if (Number.isNaN(parsedPrice) || parsedPrice < 0) {
            return res.json({ success: false, message: "Price must be a valid non-negative number" });
        }

        let parsedSizes = [];
        if (Array.isArray(sizes)) {
            parsedSizes = sizes;
        } else if (typeof sizes === "string" && sizes.trim()) {
            try {
                const sizesFromBody = JSON.parse(sizes);
                parsedSizes = Array.isArray(sizesFromBody) ? sizesFromBody : [sizesFromBody];
            } catch (parseError) {
                return res.json({ success: false, message: "Sizes must be a valid array or JSON array string" });
            }
        }

        const parsedBestseller = bestseller === true || bestseller === "true";

        console.log(name, description, parsedPrice, category, subCategory, parsedSizes, parsedBestseller);
        console.log(images);

        return res.json({
            success: true,
            message: "Product payload received successfully",
            productPreview: {
                name,
                description,
                price: parsedPrice,
                category,
                subCategory,
                sizes: parsedSizes,
                bestseller: parsedBestseller,
                imagesCount: images.length
            }
        });
    } catch (error) {
        return res.json({ success: false, message: error.message });
        
    }

}

// function for list products
const listProducts = (req, res) => {

}

// function for removing product
const removeProduct = (req, res) => {

}


// function for single product details
const singleProduct = (req, res) => {

}

export { addProduct, listProducts, removeProduct, singleProduct }

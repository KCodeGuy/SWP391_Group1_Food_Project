function showMessageDelete() {
    var result = confirm("Are you sure to delete this product?");
    if (result) {
        return true;
    } else {
        return false;
    }
}
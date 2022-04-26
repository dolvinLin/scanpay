import Http from '../utils/request'

class IndexModel extends Http {
  getProduct(data) {
    return this.request({ url: 'getProduct', method: 'GET', data: data })
  };
}

export default IndexModel

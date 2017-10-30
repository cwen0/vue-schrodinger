import Mock from 'mockjs'
import axios from 'axios' 
const Proxy = '/api'

Mock.mock(`${Proxy}/mission`, {
    'list|6-10':[{
        'name': '@word',
        'status|1':["RUNNING", "ERROR", "FINISHED"],
        'start_time': '@date("yyyy-MM-dd-HH-MM")',
    }]
})

class  Ajax {
    getMission() {
        return axios.get(`${Proxy}/mission`)
    }
}
export default new Ajax()
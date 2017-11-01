import Mock from 'mockjs'
import axios from 'axios'
const Proxy = '/api'

Mock.mock(`${Proxy}/mission`, {
  'list|4-6': [{
    'id|+1': 1,
    'name': '@word',
    'status|1': ["RUNNING", "ERROR", "FINISHED"],
    'start_time': '2017-10-26 17:33:02',
  }]
})

Mock.mock(/\/api\/mission\/\d/, {
  "id": 1,
  "name": "pyy-M",
  "scenes": {
    "id": 5,
    "name": "pyy-test",
    "desc": "pyy's stability test arrangement",
    "creator": "pyy"
  },
  "create_time": "2017-10-26 17:33:02",
  "update_time": "2017-10-26 17:43:55",
  "status": "RUNNING",
  "message": "",
  "pd_version": "hash:838f93c075f91df943470970f3d71b593004de5b",
  "tidb_version": "hash:27eedda83505d55914c912ae482c182f0e598da8",
  "tikv_version": "hash:3857ee60db755291ff2de1999ccb4ef9bc77af0f",
  "timeout": "10m0s",
  "messager": {
    "type": "",
    "callback": ""
  },
  "information-report": "",
  "boxes": {
    "pyy": {
      "name": "pyy",
      "namespace": "pyy-m-pyy-yahdig",
      "cluster": {
        "id": 40
      }
    }
  }
})

Mock.mock(/\/api\/mission\/\d\/stop/, {
   "message": "OK"
})

class Ajax {
  getMissions() {
    return axios.get(`${Proxy}/mission`)
  }

  getMissionByID(id) {
    return axios.get(`${Proxy}/mission/${id}`)
  }

  stopMissionByID(id) {
    return axios.get(`${Proxy}/mission/${id}/stop`)
  }
}
export default new Ajax()

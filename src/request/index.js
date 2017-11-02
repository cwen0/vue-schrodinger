import Mock from 'mockjs'
import axios from 'axios'
const Proxy = '/api'

Mock.mock(`${Proxy}/mission`, {
  'list|4-6': [{
    'id|+1': 1,
    'name': '@word',
    'status|1': ["RUNNING", "ERROR", "FINISHED"],
    'start_time': '2017-10-26 17:33:02'
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

Mock.mock(`${Proxy}/case/template`, {
  'list|4-6': [{
    'id|+1': 1,
    'name': '@word',
    'creator': '@name',
    'create_time': '2017-10-26 17:33:02',
    'type|1': ["auxiliary tool", "test case"]
  }]
})

Mock.mock(/\/api\/case\/template\/[\w-]+/, {
  "id": 1,
  "name": "bank2",
  "creator": "",
  "create_time": "2017-10-17 10:27:23",
  "update_time": "2017-10-17 10:27:23",
  "desc": "bank template",
  "type": "test case",
  "source": {
    "binaryname": "bank2",
    "type": "binary",
    "url": "http://pingcap-dev.hk.ufileos.com/buildbot/pingcap/octopus/7fbccc0cfb535c19247aca515d5ea42f424d46d7/centos7/case-octopus-bank2.tar.gz",
    "git_value": ""
  },
  "args": ""
})

// Mock.mock(`${Proxy}/case/template`, "POST", {
//   "id": 1,
//   "name": "bank2",
//   "creator": "",
//   "create_time": "2017-10-17 10:27:23",
//   "update_time": "2017-10-17 10:27:23",
//   "desc": "bank template",
//   "type": "test case",
//   "source": {
//     "binaryname": "bank2",
//     "type": "binary",
//     "url": "http://pingcap-dev.hk.ufileos.com/buildbot/pingcap/octopus/7fbccc0cfb535c19247aca515d5ea42f424d46d7/centos7/case-octopus-bank2.tar.gz",
//     "git_value": ""
//   },
//   "args": ""
// })

Mock.mock(`${Proxy}/case/template`, "POST", function(options) {
  return options.type
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

  getCasesTemplate() {
    return axios.get(`${Proxy}/case/template`)
  }

  getCaseTemplateByName(name) {
    return axios.get(`${Proxy}/case/template/${name}`)
  }

  createCaseTemplate(data) {
    return axios.post(`${Proxy}/case/template`, data)
  }
}
export default new Ajax()

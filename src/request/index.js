import Mock from 'mockjs'
import axios from 'axios'
const Proxy = '/api'

// Mock.mock(/\/api\/mission\/period\/[\w-]+/, "get", {
//   "status": 200,
//   "message": "",
//   "data|3-5": [{
//     'id|+1': 1,
//     'name': '@word',
//     'status|1': ["RUNNING", "ERROR", "FINISHED"],
//     'create_time': '2017-11-06 17:33:02',
//     "scenes": {
//       "name": "stability"
//     },
//     "messager": {
//       "callback": "#stability_tester"
//     }
//   }]
// })

// Mock.mock(`${Proxy}/mission`, "get", {
//   "status": 200,
//   "message": "",
//   "data|3-5": [{
//     'id|+1': 1,
//     'name': '@word',
//     'status|1': ["RUNNING", "ERROR", "FINISHED"],
//     'create_time': '2017-11-06 17:33:02',
//     "scenes": {
//       "name": "stability"
//     },
//     "messager": {
//       "callback": "#stability_tester"
//     }
//   }]
// })

// Mock.mock(/\/api\/mission\/\d/, {
//   "status": 200,
//   "message": "",
//   "data": {
//     "id": 1,
//     "name": "pyy-M",
//     "scenes": {
//       "id": 5,
//       "name": "pyy-test",
//       "desc": "pyy's stability test arrangement",
//       "creator": "pyy"
//     },
//     "create_time": "2017-10-26 17:33:02",
//     "update_time": "2017-10-26 17:43:55",
//     "status": "RUNNING",
//     "message": "",
//     "pd_version": "hash:838f93c075f91df943470970f3d71b593004de5b",
//     "tidb_version": "hash:27eedda83505d55914c912ae482c182f0e598da8",
//     "tikv_version": "hash:3857ee60db755291ff2de1999ccb4ef9bc77af0f",
//     "timeout": "10m0s",
//     "messager": {
//       "type": "",
//       "callback": "#stability_tester"
//     },
//     "information-report": "",
//     "boxes": {
//       "pyy": {
//         "name": "pyy",
//         "namespace": "pyy-m-pyy-yahdig",
//         "cluster": {
//           "id": 40
//         }
//       }
//     }

//   }
// })

// Mock.mock(/\/api\/mission\/\d\/stop/, {
//   "status": 200,
//   "message": "OK"
// })

// Mock.mock(`${Proxy}/case/template`, "get", {
//   "status": 200,
//   "message": "",
//   'data|4-6': [{
//     'id|+1': 1,
//     'name': '@word',
//     'creator': 'cwen',
//     'create_time': '2017-10-26 17:33:02',
//     'type|1': ["auxiliary tool", "test case"]
//   }]
// })

// Mock.mock(/\/api\/case\/template\/[\w-]+/, "get", {
//   "status": 200,
//   "message": "",
//   "data": {
//     "id": 1,
//     "name": "bank2",
//     "creator": "cwen",
//     "create_time": "2017-10-17 10:27:23",
//     "update_time": "2017-10-17 10:27:23",
//     "desc": "bank template",
//     "type": "test case",
//     "source": {
//       "binary_name": "bank2",
//       "type": "binary",
//       "url": "http://pingcap-dev.hk.ufileos.com/buildbot/pingcap/octopus/7fbccc0cfb535c19247aca515d5ea42f424d46d7/centos7/case-octopus-bank2.tar.gz",
//       "git_value": ""
//     },
//     "args": ""
//   }
// })

// Mock.mock(`${Proxy}/case/template`, "post", {
//   "status": 200,
//   "message": "",
//   "data": {
//     "id": 10,
//     "name": "bank2",
//     "creator": "cwen",
//     "create_time": "2017-10-17 10:27:23",
//     "update_time": "2017-10-17 10:27:23",
//     "desc": "bank template",
//     "type": "test case",
//     "source": {
//       "binaryname": "bank2",
//       "type": "binary",
//       "url": "http://pingcap-dev.hk.ufileos.com/buildbot/pingcap/octopus/7fbccc0cfb535c19247aca515d5ea42f424d46d7/centos7/case-octopus-bank2.tar.gz",
//       "git_value": ""
//     },
//     "args": ""
//   }
// })

// Mock.mock(/\/api\/case\/template\/[\w-]+/, "delete", {
//   "status": 200,
//   "message": "OK",
// })

// Mock.mock(`${Proxy}/cluster/template`, "get", {
//   "status": 200,
//   "message": "",
//   "data|4-6": [{
//     "name": '@name',
//     "creator": "cwen",
//     "desc": '@string',
//     "pd": 3,
//     "tidb": 3,
//     "tikv": 5,
//     "config_map": "latest-config-template"
//   }]
// })

// Mock.mock(/\/api\/cluster\/template\/[\w-]+/, "get", {
//   "status": 200,
//   "message": "",
//   "data": {
//     "id": 1,
//     "name": "simple-cluster",
//     "desc": "simple cluster",
//     "creator": "cwen",
//     "create_time": "2017-10-17 15:31:16",
//     "update_time": "2017-10-17 15:31:16",
//     "pd": 3,
//     "tidb": 3,
//     "tikv": 5,
//     "config_map": "tidb-instance-config-template",
//     "desc": "this cluster for test stability-test"

//   }
// })


// Mock.mock(/\/api\/cluster\/template\/[\w-]+/, "delete", {
//   "status": 200,
//   "message": "OK"
// })

// Mock.mock(`${Proxy}/cluster/template`, "post", {
//   "status": 200,
//   "message": "",
//   "data": {
//     "id": 10,
//     "name": "simple-cluster",
//     "desc": "simple cluster",
//     "creator": "cwen",
//     "create_time": "2017-10-17 15:31:16",
//     "update_time": "2017-10-17 15:31:16",
//     "pd": 3,
//     "tidb": 3,
//     "tikv": 5,
//     "config_map": "tidb-instance-config-template",
//     "desc": "this cluster for test stability-test"
//   }
// })

// Mock.mock(`${Proxy}/scenes`, "get", {
//   "status": 200,
//   "message": "",
//   "data|4-6": [{
//     "name": '@name',
//     "desc": "statbility",
//     "creator": "cwen",
//     "create_time": "2017-10-17 15:31:16",
//     "boxes": {
//       "test": {
//         "name": '@name',
//         "cluster_template": "simple-cluster",
//         "case_templates": [
//           "bank2"
//         ]
//       }
//     }
//   }]
// })

// Mock.mock(/\/api\/scenes\/[\w-]+/, "get", {
//   "status": 200,
//   "message": "",
//   "data": {
//     "id": 2,
//     "name": 'stability-test',
//     "desc": "statbility",
//     "creator": "cwen",
//     "create_time": "2017-10-17 15:31:16",
//     "update_time": "2017-10-17 15:31:16",
//     "boxes": [{
//       "name": 'simple-test',
//       "cluster_template": "simple-cluster",
//       "case_templates": [
//         "bank2"
//       ]
//     }]
//   }
// })

// Mock.mock(/\/api\/scenes\/[\w-]+/, "delete", {
//   "status": 200,
//   "message": "OK"
// })

// Mock.mock(`${Proxy}/scenes`, "post", {
//   "status": 200,
//   "data": {
//     "id": 10,
//     "name": 'stability-test',
//     "desc": "statbility",
//     "creator": "cwen",
//     "create_time": "2017-10-17 15:31:16",
//     "update_time": "2017-10-17 15:31:16",
//     "boxes": [{
//       "name": 'simple-test',
//       "cluster_template": "simple-cluster",
//       "case_templates": [
//         "bank2"
//       ]
//     }]
//   }
// })

// Mock.mock(`${Proxy}/mission/filter`, "get", {
//   "status": 200,
//   'data|4-6': [{
//     'id|+1': 1,
//     'name': '@word',
//     'status|1': ["RUNNING", "ERROR", "FINISHED"],
//     'start_time': '2017-11-06 17:33:02'
//   }]
// })

// Mock.mock(`${Proxy}/release`, "get", {
//   "status": 200,
//   "message": "OK"
// })

// Mock.mock(/\/api\/mission\/[\w-]+/, "get", {
//   "status": 200,
//   'data|4-6': [{
//     'id|+1': 1,
//     'name': '@word',
//     'status|1': ["RUNNING", "ERROR", "FINISHED"],
//     'start_time': '2017-11-06 17:33:02'
//   }]
// })

class Ajax {
  getMissions() {
    return axios.get(`${Proxy}/mission`)
  }

  getMissionReportByID(id) {
    return axios.get(`${Proxy}/mission/${id}/report`)
  }

  getMissionDetailByID(id) {
    return axios.get(`${Proxy}/mission/${id}`)
  }

  stopMissionByID(id) {
    return axios.post(`${Proxy}/mission/${id}/stop`)
  }

  startMission(data) {
    console.log(data);
    return axios.post(`${Proxy}/mission`, data)
  }

  updateMission(data) {
    return axios.put(`${Proxy}/mission/${data.id}`, data)
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

  updateCaseTemplate(data) {
    return axios.put(`${Proxy}/case/template`, data)
  }

  deleteCaseTemplate(name) {
    return axios.delete(`${Proxy}/case/template/${name}`)
  }

  getClustersTemplate() {
    return axios.get(`${Proxy}/cluster/template`)
  }

  getClusterTemplateByName(name) {
    return axios.get(`${Proxy}/cluster/template/${name}`)
  }

  deleteClusterTemplate(name) {
    return axios.delete(`${Proxy}/cluster/template/${name}`)
  }

  setClusterTemplate(data) {
    return axios.post(`${Proxy}/cluster/template`, data)
  }

  getScenes() {
    return axios.get(`${Proxy}/scenes`)
  }

  getScenesByName(name) {
    return axios.get(`${Proxy}/scenes/${name}`)
  }

  deleteScenes(name) {
    return axios.delete(`${Proxy}/scenes/${name}`)
  }

  setScenes(data) {
    return axios.post(`${Proxy}/scenes`, data)
  }

  searchMission(filter) {
    return axios.post(`${Proxy}/mission/filter`, filter)
  }

  getMissionByPeriod(period) {
    return axios.get(`${Proxy}/mission/period/${period}`)
  }

  release(data) {
    console.log(data);
    return axios.post(`${Proxy}/release`, data)
  }
}
export default new Ajax()

import Mock from 'mockjs'
import axios from 'axios'
const Proxy = '/api'

// Mock.mock(/\/api\/mission\/period\/[\w-]+/, 'get', {
// Mock.mock(/\/api\/mission\/period\/[\w-]+\?\/offset=\/\d\/size=\/\d/, 'get', {
  // 'status': 200,
  // 'message': '',
  // 'getData': function () {
  //   return
  // },
//   'data|30': [{
//     'id|+1': 1,
//     'name': '@word',
//     'status|1': ['RUNNING', 'ERROR', 'FINISHED'],
//     'create_time': '2017-11-06 17:33:02',
//     'scenes': {
//       'name': 'stability'
//     },
//     'messager': {
//       'callback': '#stability_tester'
//     }
//   }]
// })

// Mock.mock(`${Proxy}/mission`, 'get', {
//   'status': 200,
//   'message': '',
//   'data|3-15': [{
//     'id|+1': 1,
//     'name': '@word',
//     'status|1': ['RUNNING', 'ERROR', 'FINISHED'],
//     'create_time': '2017-11-06 17:33:02',
//     'scenes': {
//       'name': 'stability'
//     },
//     'messager': {
//       'callback': '#stability_tester'
//     }
//   }]
// })

// Mock.mock(/\/api\/mission\/\d/, 'get', {
//   'status': 200,
//   'message': '',
//   'data': {
//     'id': 1,
//     'name': 'pyy-M',
//     'scenes': {
//       'id': 5,
//       'name': 'pyy-test',
//       'desc': "pyy's stability test arrangement",
//       'creator': 'pyy'
//     },
//     'create_time': '2017-10-26 17:33:02',
//     'update_time': '2017-10-26 17:43:55',
//     'status': 'RUNNING',
//     'message': '',
//     'pd_version': 'hash:838f93c075f91df943470970f3d71b593004de5b',
//     'tidb_version': 'hash:27eedda83505d55914c912ae482c182f0e598da8',
//     'tikv_version': 'hash:3857ee60db755291ff2de1999ccb4ef9bc77af0f',
//     'timeout': '10m0s',
//     'messager': {
//       'type': '',
//       'callback': '#stability_tester'
//     },
//     'information-report': '',
//     'boxes': [
//       {
//         'ppy': {
//           'name': 'pyy',
//           'namespace': 'pyy-m-pyy-yahdig',
//           'cluster': {
//             'id': 40
//           }
//         }
//       },
//       {
//         'chaos': {
//           'name': 'chaos',
//           'namespace': 'oasis-x5-152783404839-chaos',
//           'cluster': {
//             'id': 40
//           }
//         }
//       }
//     ]
//   }
// })

// Mock.mock(/\/api\/mission\/\d/, 'get', {
//   'code': 200,
//   'message': '',
//   'data': {
//     'id': 152825779885,
//     'name': 'fuse_test_0x1',
//     'scenes': {
//       'id': 152825775484,
//       'name': 'fuse_test',
//       'desc': 'test',
//       'creator': 'cwen',
//       'create_time': '2018-06-06 12:02:34',
//       'update_time': '2018-06-06 12:02:34',
//       'boxes': {
//         'fuse': {
//           'labels': null,
//           'prepare': null,
//           'stop': null,
//           'case_in_order': false,
//           'cluster': {
//             'id': 152807747120,
//             'name': 'stability',
//             'desc': '',
//             'creator': 'cwen',
//             'create_time': '2018-06-04 09:57:51',
//             'update_time': '2018-06-04 09:57:51',
//             'pd': 3,
//             'tidb': 3,
//             'tikv': 3,
//             'pd_platform': '',
//             'tikv_platform': '',
//             'tidb_platform': '',
//             'config_map': 'tidb-cluster-config-template'
//           },
//           'cases': {
//             'bank': {
//               'id': 15278504002,
//               'name': 'bank',
//               'creator': 'cwen',
//               'create_time': '2018-06-01 18:53:20',
//               'update_time': '2018-06-01 18:56:50',
//               'desc': 'test',
//               'source': {
//                 'binary_name': 'bank',
//                 'image': '',
//                 'type': 'git',
//                 'url': 'http://pingcap-dev.hk.ufileos.com/buildbot/pingcap/schrodinger-test/10ca012e36eb589e4fc80bce79f6d941e32378af/centos7/bank.tar.gz',
//                 'git_value': 'branch:master',
//                 'git_repo': 'git@github.com:pingcap/schrodinger-test.git'
//               },
//               'args': '',
//               'type': 'test case',
//               'status': 'DONE'
//             }
//           },
//           'name': 'fuse'
//         }
//       }
//     },
//     'create_time': '2018-06-06 12:03:18',
//     'update_time': '2018-06-06 14:18:19',
//     'status': 'RUNNING',
//     'message': '',
//     'error_progress': 'Error is undetermined',
//     'pd_version': 'branch:master',
//     'tidb_version': 'branch:master',
//     'tikv_version': 'branch:master',
//     'timeout': '168h0m0s',
//     'raw_timeout': '',
//     'messager': {
//       'type': '',
//       'callback': '#schrodinger_alert'
//     },
//     'information_report': '{"name":"fuse_test_0x1","status":"NEW","pd_version":"branch:master","tidb_version":"branch:master","tikv_version":"branch:master","boxes":{"fuse":{"name":"fuse","owner":"fuse_test_0x1-152825779885","is_error":false,"is_handled":false,"namespace":"fuse-test-0x1-152825779885-fuse","cluster":{"pd_status":[{"name":"tidb-cluster-pd-g7q9x","pod_ip":"10.144.6.36","node_ip":"172.16.30.25","status":"Running","image":"127.0.0.1:5001/pd:c80b66b-centos7","container_id":"90ced39a80353f0fbc0d5741e61fc304ff45d418c601d7720131a5c6aa75f447","log_addr":"/mnt/mfs/new_fluentd/9/0c/90ced39a80353f0fbc0d5741e61fc304ff45d418c601d7720131a5c6aa75f447"},{"name":"tidb-cluster-pd-kcbcm","pod_ip":"10.144.10.30","node_ip":"172.16.30.15","status":"Running","image":"127.0.0.1:5001/pd:c80b66b-centos7","container_id":"7d5b77fa497152a884e3099e008616c71bc9834848797c41d06e0c0986943ab8","log_addr":"/mnt/mfs/new_fluentd/7/d5/7d5b77fa497152a884e3099e008616c71bc9834848797c41d06e0c0986943ab8"},{"name":"tidb-cluster-pd-qzl8n","pod_ip":"10.144.3.73","node_ip":"172.16.30.21","status":"Running","image":"127.0.0.1:5001/pd:c80b66b-centos7","container_id":"56966fd795df42628d83e87f528e60566706197ba8f91826a64e123e98cfab16","log_addr":"/mnt/mfs/new_fluentd/5/69/56966fd795df42628d83e87f528e60566706197ba8f91826a64e123e98cfab16"}],"tidb_status":[{"name":"tidb-cluster-tidb-dlvjx","pod_ip":"10.144.12.37","node_ip":"172.16.30.19","status":"Running","image":"127.0.0.1:5001/tidb:8a326ca-centos7","container_id":"b61a10ed3fe56e53332a7eac74690d0e2f1a6eb24f29c041da7c843b870b6c42","log_addr":"/mnt/mfs/new_fluentd/b/61/b61a10ed3fe56e53332a7eac74690d0e2f1a6eb24f29c041da7c843b870b6c42"},{"name":"tidb-cluster-tidb-fkg6v","pod_ip":"10.144.2.240","node_ip":"172.16.30.20","status":"Running","image":"127.0.0.1:5001/tidb:8a326ca-centos7","container_id":"a7b3c0f2ced1c453e12a08c1a34f0e1c873dec7ea0f6dc4d3fe00250a2ded55b","log_addr":"/mnt/mfs/new_fluentd/a/7b/a7b3c0f2ced1c453e12a08c1a34f0e1c873dec7ea0f6dc4d3fe00250a2ded55b"},{"name":"tidb-cluster-tidb-jzmp5","pod_ip":"10.144.8.35","node_ip":"172.16.30.23","status":"Running","image":"127.0.0.1:5001/tidb:8a326ca-centos7","container_id":"f749b9447efe1e144e09c754937e1162b675d1e9a09d6475780fa6ccfa89ef7e","log_addr":"/mnt/mfs/new_fluentd/f/74/f749b9447efe1e144e09c754937e1162b675d1e9a09d6475780fa6ccfa89ef7e"}],"tikv_status":[{"name":"tidb-cluster-tikv-h94ld","pod_ip":"10.144.5.199","node_ip":"172.16.30.22","status":"Running","image":"127.0.0.1:5001/tikv:da92958-unportable_centos7","container_id":"cfdd6001bd158f0bc7b2b670cefe4b68de793cfa00a98d7e74d9742eb574cf12","log_addr":"/mnt/mfs/new_fluentd/c/fd/cfdd6001bd158f0bc7b2b670cefe4b68de793cfa00a98d7e74d9742eb574cf12"},{"name":"tidb-cluster-tikv-m9bbm","pod_ip":"10.144.1.30","node_ip":"172.16.30.17","status":"Running","image":"127.0.0.1:5001/tikv:da92958-unportable_centos7","container_id":"2e29d15f1ecaf05b934755bea506b668f97d5d8c4076617f977e4860b3c38369","log_addr":"/mnt/mfs/new_fluentd/2/e2/2e29d15f1ecaf05b934755bea506b668f97d5d8c4076617f977e4860b3c38369"},{"name":"tidb-cluster-tikv-x2bqx","pod_ip":"10.144.8.34","node_ip":"172.16.30.23","status":"Running","image":"127.0.0.1:5001/tikv:da92958-unportable_centos7","container_id":"325e48ccd0c5ff121ad1d1dfcb0da64dc38e165669300c583bce3187754bfa78","log_addr":"/mnt/mfs/new_fluentd/3/25/325e48ccd0c5ff121ad1d1dfcb0da64dc38e165669300c583bce3187754bfa78"}],"node_ip":["172.16.30.11","172.16.30.12","172.16.30.13","172.16.30.14","172.16.30.15","172.16.30.16","172.16.30.17","172.16.30.18","172.16.30.19","172.16.30.20","172.16.30.21","172.16.30.22","172.16.30.23","172.16.30.24","172.16.30.25"],"tidb_service":{"node_port":42117,"cluster_ip":"10.192.197.203","cluster_port":4000},"prometheus_service":{"node_port":35754,"cluster_ip":"10.195.210.234","cluster_port":9090},"grafana_service":{"node_port":32092,"cluster_ip":"10.196.57.227","cluster_port":3000}},"Cases":{"bank":{"status":"RUNNING","namespace":"fuse-test-0x1-152825779885-fuse","owner":"fuse_test_0x1-152825779885","is_error":false,"is_handled":false,"name":"bank","pod_name":"bank","pod_ip":"10.144.6.37","container_id":"2fff84ab44034c1bd123784f5b1f497a68f23b629be00005b496cc4e72b8be27","log":"","log_path":"/mnt/mfs/new_fluentd/2/ff/2fff84ab44034c1bd123784f5b1f497a68f23b629be00005b496cc4e72b8be27"}}}},"create_time":"2018-06-06 12:03:18","update_time":"2018-06-06 14:13:19","callback":"","detail_link":"http://172.16.30.11:23333/api/mission/152825779885/detail","manage_link":"http://172.16.30.11:23333/#/bot/mission?id=152825779885"}',
//     'boxes': {
//       'fuse': {
//         'labels': null,
//         'name': 'fuse',
//         'cluster': {
//           'labels': null,
//           'id': 152825809586,
//           'template': {
//             'id': 152807747120,
//             'name': 'stability',
//             'desc': '',
//             'creator': 'cwen',
//             'create_time': '2018-06-04 09:57:51',
//             'update_time': '2018-06-04 09:57:51',
//             'pd': 3,
//             'tidb': 3,
//             'tikv': 3,
//             'pd_platform': '',
//             'tikv_platform': '',
//             'tidb_platform': '',
//             'config_map': 'tidb-cluster-config-template'
//           },
//           'pd_version': 'hash:c80b66b6df0dc2961ec4c802b83778ac66a099e7:centos7',
//           'tikv_version': 'hash:da92958c0bda6543cbfde9433063d34ab740ab42:unportable_centos7',
//           'tidb_version': 'hash:8a326cae762178b267136ac92b1062b051aaf15f:centos7',
//           'create_time': '2018-06-06 12:08:15',
//           'update_time': '2018-06-06 14:18:18',
//           'statue': 'RUNNING',
//           'sanpshot': '{"metadata":{"name":"tidb-cluster","namespace":"fuse-test-0x1-152825779885-fuse-tidb-cluster","selfLink":"/apis/pingcap.com/v1/namespaces/fuse-test-0x1-152825779885-fuse-tidb-cluster/tidbclusters/tidb-cluster","uid":"cf1da3ac-693e-11e8-8c4d-d0946604be15","resourceVersion":"2220190","generation":1,"creationTimestamp":"2018-06-06T04:05:11Z","annotations":{"cluster.pingcap.com/pdPodNames":"tidb-cluster-pd-kcbcm,tidb-cluster-pd-g7q9x,tidb-cluster-pd-qzl8n","pushgateway-image":"uhub.ucloud.cn/pingcap/pushgateway:v0.3.1"}},"spec":{"pd":{"image":"127.0.0.1:5001/pd:c80b66b-centos7","size":3},"tidb":{"image":"127.0.0.1:5001/tidb:8a326ca-centos7","requests":{"cpu":"4","memory":"16Gi"},"limits":{"cpu":"16","memory":"64Gi"},"size":3},"tikv":{"image":"127.0.0.1:5001/tikv:da92958-unportable_centos7","requests":{"cpu":"4","memory":"16Gi"},"limits":{"cpu":"8","memory":"32Gi"},"size":3},"monitor":{"prometheus":{"image":"uhub.ucloud.cn/pingcap/prometheus:v2.0.0"},"retentionDays":5,"grafana":{"image":"uhub.ucloud.cn/pingcap/grafana:4.6.3"},"dashboardInstaller":{"image":"uhub.ucloud.cn/pingcap/tidb-dashboard-installer:v1.0.0"}},"services":[{"name":"pd","type":"ClusterIP"},{"name":"tidb","type":"NodePort"},{"name":"prometheus","type":"NodePort"},{"name":"grafana","type":"NodePort"}],"configMap":"tidb-cluster-config-template","retentionDuration":"2h"},"status":{"normalStatus":{"reallyNormal":true},"gracefulDeletedStatus":{},"restoreStatus":{}},"tidb_service":{"node_ip":["172.16.30.11","172.16.30.12","172.16.30.13","172.16.30.14","172.16.30.15","172.16.30.16","172.16.30.17","172.16.30.18","172.16.30.19","172.16.30.20","172.16.30.21","172.16.30.22","172.16.30.23","172.16.30.24","172.16.30.25"],"node_port":42117,"cluster_ip":"10.192.197.203","cluster_port":4000},"prometheus_service":{"node_ip":["172.16.30.11","172.16.30.12","172.16.30.13","172.16.30.14","172.16.30.15","172.16.30.16","172.16.30.17","172.16.30.18","172.16.30.19","172.16.30.20","172.16.30.21","172.16.30.22","172.16.30.23","172.16.30.24","172.16.30.25"],"node_port":35754,"cluster_ip":"10.195.210.234","cluster_port":9090},"grafana_service":{"node_ip":["172.16.30.11","172.16.30.12","172.16.30.13","172.16.30.14","172.16.30.15","172.16.30.16","172.16.30.17","172.16.30.18","172.16.30.19","172.16.30.20","172.16.30.21","172.16.30.22","172.16.30.23","172.16.30.24","172.16.30.25"],"node_port":32092,"cluster_ip":"10.196.57.227","cluster_port":3000},"pd_service":{"cluster_ip":"10.206.14.105","cluster_port":2379},"pd_status":[{"name":"tidb-cluster-pd-g7q9x","pod_ip":"10.144.6.36","node_ip":"172.16.30.25","status":"Running","image":"127.0.0.1:5001/pd:c80b66b-centos7","container_id":"90ced39a80353f0fbc0d5741e61fc304ff45d418c601d7720131a5c6aa75f447","log_addr":""},{"name":"tidb-cluster-pd-kcbcm","pod_ip":"10.144.10.30","node_ip":"172.16.30.15","status":"Running","image":"127.0.0.1:5001/pd:c80b66b-centos7","container_id":"7d5b77fa497152a884e3099e008616c71bc9834848797c41d06e0c0986943ab8","log_addr":""},{"name":"tidb-cluster-pd-qzl8n","pod_ip":"10.144.3.73","node_ip":"172.16.30.21","status":"Running","image":"127.0.0.1:5001/pd:c80b66b-centos7","container_id":"56966fd795df42628d83e87f528e60566706197ba8f91826a64e123e98cfab16","log_addr":""}],"tidb_status":[{"name":"tidb-cluster-tidb-dlvjx","pod_ip":"10.144.12.37","node_ip":"172.16.30.19","status":"Running","image":"127.0.0.1:5001/tidb:8a326ca-centos7","container_id":"b61a10ed3fe56e53332a7eac74690d0e2f1a6eb24f29c041da7c843b870b6c42","log_addr":""},{"name":"tidb-cluster-tidb-fkg6v","pod_ip":"10.144.2.240","node_ip":"172.16.30.20","status":"Running","image":"127.0.0.1:5001/tidb:8a326ca-centos7","container_id":"a7b3c0f2ced1c453e12a08c1a34f0e1c873dec7ea0f6dc4d3fe00250a2ded55b","log_addr":""},{"name":"tidb-cluster-tidb-jzmp5","pod_ip":"10.144.8.35","node_ip":"172.16.30.23","status":"Running","image":"127.0.0.1:5001/tidb:8a326ca-centos7","container_id":"f749b9447efe1e144e09c754937e1162b675d1e9a09d6475780fa6ccfa89ef7e","log_addr":""}],"tikv_status":[{"name":"tidb-cluster-tikv-h94ld","pod_ip":"10.144.5.199","node_ip":"172.16.30.22","status":"Running","image":"127.0.0.1:5001/tikv:da92958-unportable_centos7","container_id":"cfdd6001bd158f0bc7b2b670cefe4b68de793cfa00a98d7e74d9742eb574cf12","log_addr":""},{"name":"tidb-cluster-tikv-m9bbm","pod_ip":"10.144.1.30","node_ip":"172.16.30.17","status":"Running","image":"127.0.0.1:5001/tikv:da92958-unportable_centos7","container_id":"2e29d15f1ecaf05b934755bea506b668f97d5d8c4076617f977e4860b3c38369","log_addr":""},{"name":"tidb-cluster-tikv-x2bqx","pod_ip":"10.144.8.34","node_ip":"172.16.30.23","status":"Running","image":"127.0.0.1:5001/tikv:da92958-unportable_centos7","container_id":"325e48ccd0c5ff121ad1d1dfcb0da64dc38e165669300c583bce3187754bfa78","log_addr":""}],"State":1}',
//           'mission_id': 152825779885,
//           'box_name': 'fuse'
//         },
//         'cases': {
//           'bank': {
//             'id': 152825809787,
//             'template': {
//               'id': 15278504002,
//               'name': 'bank',
//               'creator': 'cwen',
//               'create_time': '2018-06-01 18:53:20',
//               'update_time': '2018-06-01 18:56:50',
//               'desc': 'test',
//               'source': {
//                 'binary_name': 'bank',
//                 'image': '',
//                 'type': 'git',
//                 'url': 'http://pingcap-dev.hk.ufileos.com/buildbot/pingcap/schrodinger-test/10ca012e36eb589e4fc80bce79f6d941e32378af/centos7/bank.tar.gz',
//                 'git_value': 'branch:master',
//                 'git_repo': 'git@github.com:pingcap/schrodinger-test.git'
//               },
//               'args': '',
//               'type': 'test case',
//               'status': 'DONE'
//             },
//             'create_time': '',
//             'update_time': '',
//             'snapshot': '',
//             'status': 'NEW',
//             'mission_id': 152825779885,
//             'box_name': 'fuse',
//             'cluster': {
//               'labels': null,
//               'id': 152825809586,
//               'template': {
//                 'id': 152807747120,
//                 'name': 'stability',
//                 'desc': '',
//                 'creator': 'cwen',
//                 'create_time': '2018-06-04 09:57:51',
//                 'update_time': '2018-06-04 09:57:51',
//                 'pd': 3,
//                 'tidb': 3,
//                 'tikv': 3,
//                 'pd_platform': '',
//                 'tikv_platform': '',
//                 'tidb_platform': '',
//                 'config_map': 'tidb-cluster-config-template'
//               },
//               'pd_version': 'hash:c80b66b6df0dc2961ec4c802b83778ac66a099e7:centos7',
//               'tikv_version': 'hash:da92958c0bda6543cbfde9433063d34ab740ab42:unportable_centos7',
//               'tidb_version': 'hash:8a326cae762178b267136ac92b1062b051aaf15f:centos7',
//               'create_time': '2018-06-06 12:08:15',
//               'update_time': '2018-06-06 14:18:18',
//               'statue': 'RUNNING',
//               'sanpshot': '{"metadata":{"name":"tidb-cluster","namespace":"fuse-test-0x1-152825779885-fuse-tidb-cluster","selfLink":"/apis/pingcap.com/v1/namespaces/fuse-test-0x1-152825779885-fuse-tidb-cluster/tidbclusters/tidb-cluster","uid":"cf1da3ac-693e-11e8-8c4d-d0946604be15","resourceVersion":"2220190","generation":1,"creationTimestamp":"2018-06-06T04:05:11Z","annotations":{"cluster.pingcap.com/pdPodNames":"tidb-cluster-pd-kcbcm,tidb-cluster-pd-g7q9x,tidb-cluster-pd-qzl8n","pushgateway-image":"uhub.ucloud.cn/pingcap/pushgateway:v0.3.1"}},"spec":{"pd":{"image":"127.0.0.1:5001/pd:c80b66b-centos7","size":3},"tidb":{"image":"127.0.0.1:5001/tidb:8a326ca-centos7","requests":{"cpu":"4","memory":"16Gi"},"limits":{"cpu":"16","memory":"64Gi"},"size":3},"tikv":{"image":"127.0.0.1:5001/tikv:da92958-unportable_centos7","requests":{"cpu":"4","memory":"16Gi"},"limits":{"cpu":"8","memory":"32Gi"},"size":3},"monitor":{"prometheus":{"image":"uhub.ucloud.cn/pingcap/prometheus:v2.0.0"},"retentionDays":5,"grafana":{"image":"uhub.ucloud.cn/pingcap/grafana:4.6.3"},"dashboardInstaller":{"image":"uhub.ucloud.cn/pingcap/tidb-dashboard-installer:v1.0.0"}},"services":[{"name":"pd","type":"ClusterIP"},{"name":"tidb","type":"NodePort"},{"name":"prometheus","type":"NodePort"},{"name":"grafana","type":"NodePort"}],"configMap":"tidb-cluster-config-template","retentionDuration":"2h"},"status":{"normalStatus":{"reallyNormal":true},"gracefulDeletedStatus":{},"restoreStatus":{}},"tidb_service":{"node_ip":["172.16.30.11","172.16.30.12","172.16.30.13","172.16.30.14","172.16.30.15","172.16.30.16","172.16.30.17","172.16.30.18","172.16.30.19","172.16.30.20","172.16.30.21","172.16.30.22","172.16.30.23","172.16.30.24","172.16.30.25"],"node_port":42117,"cluster_ip":"10.192.197.203","cluster_port":4000},"prometheus_service":{"node_ip":["172.16.30.11","172.16.30.12","172.16.30.13","172.16.30.14","172.16.30.15","172.16.30.16","172.16.30.17","172.16.30.18","172.16.30.19","172.16.30.20","172.16.30.21","172.16.30.22","172.16.30.23","172.16.30.24","172.16.30.25"],"node_port":35754,"cluster_ip":"10.195.210.234","cluster_port":9090},"grafana_service":{"node_ip":["172.16.30.11","172.16.30.12","172.16.30.13","172.16.30.14","172.16.30.15","172.16.30.16","172.16.30.17","172.16.30.18","172.16.30.19","172.16.30.20","172.16.30.21","172.16.30.22","172.16.30.23","172.16.30.24","172.16.30.25"],"node_port":32092,"cluster_ip":"10.196.57.227","cluster_port":3000},"pd_service":{"cluster_ip":"10.206.14.105","cluster_port":2379},"pd_status":[{"name":"tidb-cluster-pd-g7q9x","pod_ip":"10.144.6.36","node_ip":"172.16.30.25","status":"Running","image":"127.0.0.1:5001/pd:c80b66b-centos7","container_id":"90ced39a80353f0fbc0d5741e61fc304ff45d418c601d7720131a5c6aa75f447","log_addr":""},{"name":"tidb-cluster-pd-kcbcm","pod_ip":"10.144.10.30","node_ip":"172.16.30.15","status":"Running","image":"127.0.0.1:5001/pd:c80b66b-centos7","container_id":"7d5b77fa497152a884e3099e008616c71bc9834848797c41d06e0c0986943ab8","log_addr":""},{"name":"tidb-cluster-pd-qzl8n","pod_ip":"10.144.3.73","node_ip":"172.16.30.21","status":"Running","image":"127.0.0.1:5001/pd:c80b66b-centos7","container_id":"56966fd795df42628d83e87f528e60566706197ba8f91826a64e123e98cfab16","log_addr":""}],"tidb_status":[{"name":"tidb-cluster-tidb-dlvjx","pod_ip":"10.144.12.37","node_ip":"172.16.30.19","status":"Running","image":"127.0.0.1:5001/tidb:8a326ca-centos7","container_id":"b61a10ed3fe56e53332a7eac74690d0e2f1a6eb24f29c041da7c843b870b6c42","log_addr":""},{"name":"tidb-cluster-tidb-fkg6v","pod_ip":"10.144.2.240","node_ip":"172.16.30.20","status":"Running","image":"127.0.0.1:5001/tidb:8a326ca-centos7","container_id":"a7b3c0f2ced1c453e12a08c1a34f0e1c873dec7ea0f6dc4d3fe00250a2ded55b","log_addr":""},{"name":"tidb-cluster-tidb-jzmp5","pod_ip":"10.144.8.35","node_ip":"172.16.30.23","status":"Running","image":"127.0.0.1:5001/tidb:8a326ca-centos7","container_id":"f749b9447efe1e144e09c754937e1162b675d1e9a09d6475780fa6ccfa89ef7e","log_addr":""}],"tikv_status":[{"name":"tidb-cluster-tikv-h94ld","pod_ip":"10.144.5.199","node_ip":"172.16.30.22","status":"Running","image":"127.0.0.1:5001/tikv:da92958-unportable_centos7","container_id":"cfdd6001bd158f0bc7b2b670cefe4b68de793cfa00a98d7e74d9742eb574cf12","log_addr":""},{"name":"tidb-cluster-tikv-m9bbm","pod_ip":"10.144.1.30","node_ip":"172.16.30.17","status":"Running","image":"127.0.0.1:5001/tikv:da92958-unportable_centos7","container_id":"2e29d15f1ecaf05b934755bea506b668f97d5d8c4076617f977e4860b3c38369","log_addr":""},{"name":"tidb-cluster-tikv-x2bqx","pod_ip":"10.144.8.34","node_ip":"172.16.30.23","status":"Running","image":"127.0.0.1:5001/tikv:da92958-unportable_centos7","container_id":"325e48ccd0c5ff121ad1d1dfcb0da64dc38e165669300c583bce3187754bfa78","log_addr":""}],"State":1}',
//               'mission_id': 152825779885,
//               'box_name': 'fuse'
//             }
//           }
//         }
//       }
//     }
//   }
// })

// Mock.mock(/\/api\/mission\/\d\/stop/, {
//   'status': 200,
//   'message': 'OK'
// })

// Mock.mock(`${Proxy}/case/template`, 'get', {
//   'status': 200,
//   'message': '',
//   'data|20-30': [{
//     'id|+1': 1,
//     'name': '@word',
//     'creator': 'cwen',
//     'create_time': '2017-10-26 17:33:02',
//     'type|1': ['auxiliary tool', 'test case']
//   }]
// })

// Mock.mock(/\/api\/case\/template\/[\w-]+/, 'get', {
//   'status': 200,
//   'message': '',
//   'data': {
//     'id': 1,
//     'name': 'bank2',
//     'creator': 'cwen',
//     'create_time': '2017-10-17 10:27:23',
//     'update_time': '2017-10-17 10:27:23',
//     'desc': 'bank template',
//     'type': 'test case',
//     'source': {
//       'binary_name': 'bank2',
//       'type': 'binary',
//       'url': 'http://pingcap-dev.hk.ufileos.com/buildbot/pingcap/octopus/7fbccc0cfb535c19247aca515d5ea42f424d46d7/centos7/case-octopus-bank2.tar.gz',
//       'git_value': ''
//     },
//     'args': ''
//   }
// })

// Mock.mock(`${Proxy}/case/template`, 'post', {
//   'status': 200,
//   'message': '',
//   'data': {
//     'id': 10,
//     'name': 'bank2',
//     'creator': 'cwen',
//     'create_time': '2017-10-17 10:27:23',
//     'update_time': '2017-10-17 10:27:23',
//     'desc': 'bank template',
//     'type': 'test case',
//     'source': {
//       'binaryname': 'bank2',
//       'type': 'binary',
//       'url': 'http://pingcap-dev.hk.ufileos.com/buildbot/pingcap/octopus/7fbccc0cfb535c19247aca515d5ea42f424d46d7/centos7/case-octopus-bank2.tar.gz',
//       'git_value': ''
//     },
//     'args': ''
//   }
// })

// Mock.mock(/\/api\/case\/template\/[\w-]+/, 'delete', {
//   'status': 200,
//   'message': 'OK'
// })

// Mock.mock(`${Proxy}/cluster/template`, 'get', {
//   'status': 200,
//   'message': '',
//   'data|20-30': [{
//     'name': '@name',
//     'creator': 'yini',
//     'desc': '@string',
//     'pd': 3,
//     'tidb': 3,
//     'tikv': 5,
//     'config_map': 'latest-config-template'
//   }]
// })

// Mock.mock(/\/api\/cluster\/template\/[\w-]+/, 'get', {
//   'status': 200,
//   'message': '',
//   'data': {
//     'id': 1,
//     'name': 'simple-cluster',
//     'desc': 'simple cluster',
//     'creator': 'cwen',
//     'create_time': '2017-10-17 15:31:16',
//     'update_time': '2017-10-17 15:31:16',
//     'pd': 3,
//     'tidb': 3,
//     'tikv': 5,
//     'config_map': 'tidb-instance-config-template'
//     // 'desc': 'this cluster for test stability-test'

//   }
// })

// Mock.mock(/\/api\/cluster\/template\/[\w-]+/, 'delete', {
//   'status': 200,
//   'message': 'OK'
// })

// Mock.mock(`${Proxy}/cluster/template`, 'post', {
//   'status': 200,
//   'message': '',
//   'data': {
//     'id': 10,
//     'name': 'simple-cluster',
//     'desc': 'simple cluster',
//     'creator': 'cwen',
//     'create_time': '2017-10-17 15:31:16',
//     'update_time': '2017-10-17 15:31:16',
//     'pd': 3,
//     'tidb': 3,
//     'tikv': 5,
//     'config_map': 'tidb-instance-config-template'
//     // 'desc': 'this cluster for test stability-test'
//   }
// })

// Mock.mock(`${Proxy}/scenes`, 'get', {
//   'status': 200,
//   'message': '',
//   'data|4-6': [{
//     'name': '@name',
//     'desc': 'statbility',
//     'creator': 'cwen',
//     'create_time': '2017-10-17 15:31:16',
//     'boxes': {
//       'test': {
//         'name': '@name',
//         'cluster_template': 'simple-cluster',
//         'case_templates': [
//           'bank2'
//         ]
//       }
//     }
//   }]
// })

// Mock.mock(/\/api\/scenes\/[\w-]+/, 'get', {
//   'status': 200,
//   'message': '',
//   'data': {
//     'id': 2,
//     'name': 'stability-test',
//     'desc': 'statbility',
//     'creator': 'cwen',
//     'create_time': '2017-10-17 15:31:16',
//     'update_time': '2017-10-17 15:31:16',
//     'boxes': [{
//       'name': 'simple-test',
//       'cluster_template': 'simple-cluster',
//       'case_templates': [
//         'bank2'
//       ]
//     }]
//   }
// })

// Mock.mock(/\/api\/scenes\/[\w-]+/, 'delete', {
//   'status': 200,
//   'message': 'OK'
// })

// Mock.mock(`${Proxy}/scenes`, 'post', {
//   'status': 200,
//   'data': {
//     'id': 10,
//     'name': 'stability-test',
//     'desc': 'statbility',
//     'creator': 'cwen',
//     'create_time': '2017-10-17 15:31:16',
//     'update_time': '2017-10-17 15:31:16',
//     'boxes': [{
//       'name': 'simple-test',
//       'cluster_template': 'simple-cluster',
//       'case_templates': [
//         'bank2'
//       ]
//     }]
//   }
// })

// Mock.mock(`${Proxy}/mission/filter`, 'get', {
//   'status': 200,
//   'data|4-6': [{
//     'id|+1': 1,
//     'name': '@word',
//     'status|1': ['RUNNING', 'ERROR', 'FINISHED'],
//     'start_time': '2017-11-06 17:33:02'
//   }]
// })

// Mock.mock(`${Proxy}/release`, 'get', {
//   'status': 200,
//   'message': 'OK'
// })

// Mock.mock(/\/api\/mission\/[\w-]+/, 'get', {
//   'status': 200,
//   'data|4-6': [{
//     'id|+1': 1,
//     'name': '@word',
//     'status|1': ['RUNNING', 'ERROR', 'FINISHED'],
//     'start_time': '2017-11-06 17:33:02'
//   }]
// })

class Ajax {
  getMissions () {
    return axios.get(`${Proxy}/mission`)
  }

  getMissionReportByID (id) {
    return axios.get(`${Proxy}/mission/${id}/report`)
  }

  getMissionDetailByID (id) {
    return axios.get(`${Proxy}/mission/${id}`)
  }

  stopMissionByID (id) {
    return axios.post(`${Proxy}/mission/${id}/stop`)
  }

  startMission (data) {
    console.log(data)
    return axios.post(`${Proxy}/mission`, data)
  }

  updateMission (data) {
    return axios.put(`${Proxy}/mission/${data.id}`, data)
  }

  getCasesTemplate () {
    return axios.get(`${Proxy}/case/template`)
  }

  getCaseTemplateByName (name) {
    return axios.get(`${Proxy}/case/template/${name}`)
  }

  createCaseTemplate (data) {
    return axios.post(`${Proxy}/case/template`, data)
  }

  updateCaseTemplate (data) {
    return axios.put(`${Proxy}/case/template`, data)
  }

  deleteCaseTemplate (name) {
    return axios.delete(`${Proxy}/case/template/${name}`)
  }

  getClustersTemplate () {
    return axios.get(`${Proxy}/cluster/template`)
  }

  getClusterTemplateByName (name) {
    return axios.get(`${Proxy}/cluster/template/${name}`)
  }

  deleteClusterTemplate (name) {
    return axios.delete(`${Proxy}/cluster/template/${name}`)
  }

  setClusterTemplate (data) {
    return axios.post(`${Proxy}/cluster/template`, data)
  }

  getScenes () {
    return axios.get(`${Proxy}/scenes`)
  }

  getScenesByName (name) {
    return axios.get(`${Proxy}/scenes/${name}`)
  }

  deleteScenes (name) {
    return axios.delete(`${Proxy}/scenes/${name}`)
  }

  setScenes (data) {
    return axios.post(`${Proxy}/scenes`, data)
  }

  searchMission (filter) {
    return axios.post(`${Proxy}/mission/filter`, filter)
  }

  getMissionByPeriod (period, offset, size) {
    return axios.get(`${Proxy}/mission/period/${period}?offset=${offset}&size=${size}`)
  }

  release (data) {
    console.log(data)
    return axios.post(`${Proxy}/release`, data)
  }

  stopBoxByName (missionId, boxName) {
    return axios.post(`${Proxy}/mission/${missionId}/stop/${boxName}`)
  }

  runBoxByName (missionId, boxName) {
    return axios.post(`${Proxy}/mission/${missionId}/start/${boxName}`)
  }

  replayMission (id) {
    return axios.post(`${Proxy}/mission/${id}/replay`)
  }

  stopMission (id) {
    return axios.post(`${Proxy}/mission/${id}/stop`)
  }
  replayMissionWithData (id, data) {
    console.log(data)
    return axios.post(`${Proxy}/mission/${id}/replay/false`, data)
  }

  holdMission (id) {
    return axios.post(`${Proxy}/mission/${id}/hold`)
  }

  getExpiredMission () {
    return axios.get(`${Proxy}/mission/expired`)
  }

  handleMission (id) {
    return axios.post(`${Proxy}/mission/${id}/handle`)
  }

}
export default new Ajax()

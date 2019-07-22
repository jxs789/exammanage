import React, { useState, useEffect } from 'react';
import { connect } from 'dva';
import { Route, Redirect, NavLink, Switch } from 'dva/router';
import styles from "./main.css"
import { Dropdown, Menu, Icon, Spin, Select, Modal, Form, Input } from 'antd';
import { injectIntl } from 'react-intl';
import Exoprts from "../main/exports/index"
const { SubMenu } = Menu;
const { Option } = Select;
function IndexPage(props) {
  let [visible, setvisible] = useState(false);
  let [url, seturl] = useState('https://cdn.nlark.com/yuque/0/2019/png/anonymous/1547609339813-e4e49227-157c-452d-be7e-408ca8654ffe.png?x-oss-process=image/resize,m_fill,w_48,h_48/format,png')
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
          {props.intl.formatMessage({ id: 'personage.personal_center' })}
        </a>
      </Menu.Item>
      <Menu.Item key="1">
        <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
          {props.intl.formatMessage({ id: 'personage.My_class' })}
        </a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">
        {props.intl.formatMessage({ id: 'personage.setting' })}
      </Menu.Item>
      <Menu.Item key="4">
        {props.intl.formatMessage({ id: 'personage.log_out' })}
      </Menu.Item>
    </Menu>

  );
  // useEffect(() => {
  //   console.log(props.upuser)
  // }, [props.upuser])
  let showModal = () => {
    console.log(1);
    setvisible(true);
  };

  let handleOk = e => {
    setvisible(false);
  };

  let handleCancel = e => {
    // console.log(e);
    setvisible(false);
  };
  let load = (e, res) => {
    let formData = new FormData();
    formData.append(e.target.files[0].name, e.target.files[0]);
    props.getUrl(formData)
    props.setUser({ user_id: res.user_id, avatar: props.imgUrl })
  }
  let handleClick = e => {
    // console.log('click ', e);

  };
  const { getFieldDecorator } = props.form;
  //获取我的路由啥也不去渲染
  if (!props.myView.length) {
    return null
  }
  return (
    <div className={styles.layout}>
      <div className={styles.header}>
        <h1 className={styles.logo}><img src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551624718911&di=4a7004f8d71bd8da84d4eadf1b59e689&imgtype=0&src=http%3A%2F%2Fimg105.job1001.com%2Fupload%2Falbum%2F2014-10-15%2F1413365052_95IE3msH.jpg' /></h1>
        <Select defaultValue="中文" style={{ width: 90 }}>
          <Option value="中文" onClick={() => props.changeLocale('zh')}>中文</Option>
          <Option value="英文" onClick={() => props.changeLocale('en')}>English</Option>
        </Select>
        <div className={styles.logout}>
          <Dropdown overlay={menu}>
            <span onClick={showModal}>
              <img src={props.imgUrl ? props.imgUrl : url} style={{ width: 50, height: 50, zIndex: 9999 }} />
              {props.userInfo.user_name}
            </span>
          </Dropdown>
          <Modal
            title="Basic Modal"
            visible={visible}
            onOk={() => handleOk()}
            onCancel={() => handleCancel()}
          >
            <Form layout="vertical">
              <Form.Item label="User_name">
                {getFieldDecorator('user_name')(
                  <Input type="text" style={{ marginBottom: 20 }} />
                )}
                <input type="file" name="" onChange={(e) => load(e, props.userInfo)} className={styles.files} />
                <img src={props.imgUrl ? props.imgUrl : url} style={{}} className={styles.imgUrl} />
              </Form.Item>
            </Form>
          </Modal>
        </div>
      </div>
      <div className={styles.layout_content}>
        <div className={styles.slide}>
          <Menu
            theme="dark"
            defaultOpenKeys={[props.myView[0].name]}
            defaultSelectedKeys={[props.myView[0].children[0].name]}
            style={{ width: 200 }}
            mode="inline"
          >
            {
              props.myView.map(item => {
                return <SubMenu
                  key={item.name}
                  title={
                    <span>
                      <Icon type="mail" />
                      <span>{props.intl.formatMessage({ id: item.name })}</span>
                    </span>
                  }
                >{
                    item.children.map(value => {
                      if (!value.name) {
                        return
                      }
                      return <Menu.Item key={value.name}>
                        <NavLink to={value.path}>{props.intl.formatMessage({ id: value.name })}</NavLink>
                      </Menu.Item>
                    })
                  }</SubMenu>
              })
            }
          </Menu>
        </div>
        <div className={styles.content}>
          <div className={styles.layout_main}>
            <Switch>
              {/* 配置用户拥有的路由 */}
              {
                props.myView.map(item => {
                  return item.children.map(value => {
                    return <Route key={value.name} path={value.path} component={value.component}></Route>
                  })
                })
              }
              {/*配置用户禁止访问的路由*/}
              {props.forbiddenView.map((item) => {
                return <Redirect path={item.path} to="/403" key={item.name} />

              })}
              {/*配置不存在的路由*/}
              {/* <Redirect to="/404"></Redirect> */}
            </Switch>
          </div>
          {props.global ? <div className={styles.loading}><Spin /></div> : null}
        </div>

      </div>
    </div >
  );
}
const mapState = state => {
  return {
    ...state.checkTheItem,
    global: state.loading.global,
    ...state.login,
    myView: state.login.myView,
    forbiddenView: state.login.forbiddenView
  };
};
const mapDispatch = dispatch => {
  return {
    changeLocale: payload => {
      dispatch({
        type: "global/updateLocale",
        payload
      })
    },
    setUser: payload => {
      dispatch({
        type: "login/getUserC",
        payload
      })
    },
    getUrl: payload => {
      // console.log(payload)
      dispatch({
        type: "login/url",
        payload
      })
    }
  }
}
export default injectIntl(connect(mapState, mapDispatch)(Form.create()(IndexPage)))

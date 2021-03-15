import React, { Fragment, useEffect } from 'react';
import { List, Avatar, Row, Col } from 'antd';
import qs from 'qs';
import { useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import { useTopics } from '../../sotre/action/index';
import { UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import moment from 'moment';
import 'moment/locale/zh-cn';
function lastAt(time) {
    // moment.locale('zh-cn');
    return moment(time).fromNow();
}
export default function IndexList() {
    const { loading, data, limit } = useSelector(state => state.topics);
    const getData = useTopics();
    const { search } = useLocation();
    const { push } = useHistory();
    const { page = 1, tab = "all" } = qs.parse(search.slice(1));
    useEffect(() => {
        getData(page, tab, limit);
    }, [page, tab]);
    return <Fragment>
        <List
            loading={loading}
            dataSource={data}
            renderItem={item => {
                // return <List.Item>
                //     <List.Item.Meta
                //         avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                //         title={<a href="https://ant.design">{item.title}</a>}
                //         description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                //     />
                // </List.Item>
                return <List.Item
                    style={{
                        margin: '0 20px'
                    }}
                >
                    <Row style={
                        {
                            width: "100%"
                        }
                    }>
                        <Col
                            span={2}
                            style={
                                {
                                    textAlign: "center"
                                }
                            }
                        >
                            <Link to={"/user/" + item.author.loginname}>
                                <Avatar
                                    icon={<UserOutlined />}
                                    src={item.author.avatar_url}
                                    title={item.author.loginname}
                                />
                            </Link>
                        </Col>
                        <Col span={16}>
                            <Link to={"/topic/" + item.id}>{item.title}</Link>
                        </Col>
                        <Col span={6} style={{ textAlign: 'right' }}>
                            {lastAt(item.last_reply_at)}
                        </Col>
                    </Row>
                </List.Item>
            }}
            pagination={{
                position: 'bottom',
                total: 1500,
                pageSize: 10,
                current: page - 0,
                showQuickJumper: true,
                showSizeChanger: false,
                onChange(page) {
                    console.log(page);
                    push(`/?tab=${tab}&page=${page}`)
                }
            }}
        />
    </Fragment>
}
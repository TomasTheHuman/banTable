/* eslint-disable react/react-in-jsx-scope */
import React from 'react'
import { Popconfirm, Button } from 'antd';
import { connect } from 'react-redux';
import { blockUsers } from './redux/actions'

class BlockUser extends React.Component {
    render () {
        const {
            content = {},
            blockUsers
        } = this.props

        return (
            <Popconfirm
                title="Вы уверены что хотите заблокировать пользователя?"
                onConfirm={() => blockUsers(content.id-1)}
                okText="Да"
                cancelText="Нет"
            >
                <Button type='danger' > Заблокировать пользователя </Button>
            </Popconfirm>
        )
    }
    
};

const mapStateToProps = state => {
    return {
        visible: state.modal.visible,
        content: state.modal.content
    }
}

const mapDispatchToProps = dispatch => {
    return {
        blockUsers: (record) => {
            let action = blockUsers(record)
            dispatch(action)
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BlockUser)

import React from 'react';
import './App.css';
import BlockUser from './BlockUser.js'
import { connect } from 'react-redux'
import { CHANGE_MODAL_VISIBLE } from './redux/action-types'
import { Modal as AntdModal } from 'antd';

class Modal extends React.Component {
    renderContent(content = null) {
        if (!content) return null;

        return (
            <div>
                <h1>Адрес:</h1>
                <p> город: {content.address.city} </p>
                <p> улица: {content.address.street} </p>
                <p> квартира: {content.address.suite} </p>
            </div>
        )
    }

    render() {
        const {
            visible = false,
            triggerModal,
            content = null,
            blockUsers
        } = this.props

        return (
            <AntdModal
                title="Дополнительная информация о пользователе"
                visible={visible}
                onOk={triggerModal}
                onCancel={triggerModal}
            >
                {this.renderContent(content)}
                <BlockUser blockUsers={blockUsers} content={content} />
                
            </AntdModal>)
    }
}

const mapStateToProps = state => {
    return {
        visible: state.modal.visible,
        content: state.modal.content
    }
}

const mapDispatchToProps = dispatch => {
    return {
        triggerModal: function () {
            return dispatch({
                type: CHANGE_MODAL_VISIBLE,
            });
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Modal)
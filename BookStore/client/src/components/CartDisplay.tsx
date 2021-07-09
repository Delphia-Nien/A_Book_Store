import React, { useState, useCallback, useEffect } from 'react';
import { Container, Modal, ModalHeader, NavLink, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../flux/actions/itemActions';
import { IItemReduxProps, IShoppingList } from '../types/interfaces';

const Cart = ({
  getItems,
  item,
  isAuthenticated,
  deleteItem
}: IShoppingList) => {
  useEffect(() => {
    getItems();
  }, [getItems]);

  const [modal, setModal] = useState(false);
  const handleToggle = useCallback(() => {  setModal(!modal);}, [modal]);

  const handleDelete = (id: string) => {
    deleteItem(id);
  };

  const { items } = item;
  return (
    <div>
        <NavLink onClick={handleToggle} href="#"><i className="material-icons md-36">shopping_cart</i></NavLink>
        <Modal isOpen={modal} toggle={handleToggle}>
        <ModalHeader toggle={handleToggle}>My Book Cart</ModalHeader>
        <Container>
            <ListGroup>
                <TransitionGroup className="shopping-list"> {items.map(({ _id, img, price}) => (
                <CSSTransition key={_id} timeout={500} classNames="fade">
                    <ListGroupItem>
                        {isAuthenticated ? (<Button className="remove-btn" color="danger" size="sm" onClick={() => handleDelete(_id)}>&times;</Button>) : null}
                        {<span><img src={img} height="100" width="100" />{price}</span>}                   
                    </ListGroupItem>
                </CSSTransition>))}
                </TransitionGroup>
            </ListGroup>
        </Container>
        </Modal>
    </div>
  );
};

const mapStateToProps = (state: IItemReduxProps) => ({
  item: state.item,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { getItems, deleteItem })(Cart);

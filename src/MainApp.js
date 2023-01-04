import React, {useEffect, useState} from 'react';
import Spinner from 'react-bootstrap/Spinner';
import './MainApp.css';
import { connect } from 'react-redux';
import { fetchUsers,fetchSingleUser } from './redux/ActionCreators';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const mapStateToProps = (state) => {
    return {
        users:state.users,
        singleUser:state.singleUser
    };
  };
  
  const mapDispatchToProps = (dispatch) => ({
    fetchUsers: () => dispatch(fetchUsers()),
    fetchSingleUser: (userNo) => dispatch(fetchSingleUser(userNo))
  });

const MainApp = (props) => {

    const [singleUserNo, setSingleUserNo] = useState(null);

    const handleClick = (userNo) => {
        setSingleUserNo(userNo);
        console.log(userNo);
    }

    useEffect(() => {
        props.fetchUsers();
    }, [])

    useEffect(() => {
        if(singleUserNo!=null)
        {
            props.fetchSingleUser(singleUserNo);
        }
    }, [singleUserNo])
    

    return (
        <div className='mainScreen'>
            {props.users.isLoading ? 
                <>
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                    <div className='UsersSpinnerText'>Fetching Users</div>
                </>
                :
                <>
                    <Card className='singleUserCard'>
                        {props.singleUser.isLoading && singleUserNo!=null ? 
                            <>
                                <Spinner animation="border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </Spinner>
                                <div className='UsersSpinnerText'>Fetching the user with ID : {singleUserNo}</div>
                            </> 
                            : 
                            <>
                                <Card.Img variant="top" src={`${props.singleUser.dat.data ? props.singleUser.dat.data.avatar:'https://avatars2.githubusercontent.com/u/36787200?v=4'}`} />
                                <Card.Body>
                                    <Card.Title>
                                        {props.singleUser.dat.data ? 
                                            <>{props.singleUser.dat.data.first_name + ' ' + props.singleUser.dat.data.last_name}</>
                                            :
                                            <>Sample Name</>
                                        }
                                    </Card.Title>
                                    <Card.Text>
                                        {props.singleUser.dat.data ? 
                                            <>Email : {props.singleUser.dat.data.email}</>
                                            :
                                            <>Click any button to display that user's information</>
                                        }
                                    </Card.Text>
                                </Card.Body>
                            </>
                        }
                    </Card>
                    <div className='buttonsDiv'>
                        {props.users.dat.data.map((singleDat, index) => {
                            return(
                                <Button variant="primary" onClick={() => handleClick(index+1)}>ID : {index+1}</Button> 
                            )
                        })}
                    </div>
                </>
            }
            
        </div>
      )
}  

export default connect(mapStateToProps, mapDispatchToProps)(MainApp);
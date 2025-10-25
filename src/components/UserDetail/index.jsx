import React from "react";
import {Card,CardContent, Typography} from "@mui/material";

import "./styles.css";
import {useParams} from "react-router-dom";
import { Link } from "react-router-dom";
import models from "../../modelData/models";


/**
 * Define UserDetail, a React component of Project 4.
 */


function UserDetail() {
    const {userId} = useParams();
    const user = models.userModel(userId); 
    if(!user){
      return(
        <Typography variant="h2">
          Không tải đưọc người dùng
        </Typography>
      )
    }
    else return (
        <>
          <Card>
            <CardContent>
              <Typography variant="h5">
                <strong>{user.first_name} {user.last_name}</strong>
              </Typography>
              <Typography variant="body1">
                Địa chỉ: {user.location}
              </Typography>
              <Typography variant="body1">
                Nghề nghiệp: {user.occupation}
              </Typography>
              <Typography variant="body1">
                Mô tả: {user.description}
              </Typography>
            </CardContent>
          </Card>
          <Link to={`/photos/${user._id}`}>
            <button variant="h6">
              Xem ảnh của {user.first_name} {user.last_name}
            </button>
          </Link>
        </>
    );
}

export default UserDetail;

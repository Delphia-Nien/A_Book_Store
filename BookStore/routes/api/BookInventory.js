//import { Router } from 'express';
//import Book from '../../models/Book';

const mongoose = require('mongoose');
//const BookModel = require('../../models/Book');
import BookModel from '../../models/Book';


  const books = [
    {
        bookname: 'ANIMALS',
        price: '76',
        Image: 'https://www.mackids.com.tw/upload/product/AFPG4943-in0.jpg',
    },
    {
        bookname: 'Go Fishing',
        price: '101',
        Image: 'https://www.mackids.com.tw/upload/product/AFMM1321-in0.jpg',
    },
    {
        bookname: 'My First Day',
        price: '80',
        Image: 'https://www.mackids.com.tw/upload/product/AFSI5069-in0.jpg',
    },
    {
        bookname: 'Sleeping Beauty',
        price: '99',
        Image: 'https://www.mackids.com.tw/upload/product/AFUB1469-in0.jpg',
    },
    {
        bookname: 'Snow White',
        price: '75',
        Image: 'https://www.mackids.com.tw/upload/product/AFUB1463-in0.jpg',
    },
    {
        bookname: 'Cinderella',
        price: '100',
        Image: 'https://www.mackids.com.tw/upload/product/AFEB0499-in0.jpg',
    },
    {
        bookname: 'Animals',
        price: '85',
        Image: 'https://www.mackids.com.tw/upload/product/AFMM1002-in0.jpg',
    },
    {
        bookname: 'AMAZING ANIMALS',
        price: '80',
        Image: 'https://www.mackids.com.tw/upload/product/AFSC5936-in0.jpg',
    },
    {
        bookname: '10 Button Book',
        price: '102',
        Image: 'https://www.mackids.com.tw/upload/product/AFWK042-in0.jpg',
    },
    {
        bookname: 'Animals',
        price: '285',
        Image: 'https://www.mackids.com.tw/upload/product/AFDK269-in0.jpg',
    },
    {
        bookname: 'Puppies',
        price: '380',
        Image: 'https://www.mackids.com.tw/upload/product/AFDK0545-in0.jpg',
    },
    {
        bookname: 'Happy Birthday!',
        price: '198',
        Image: 'https://www.mackids.com.tw/upload/product/AFDK0432-in0.jpg',
    },
    {
        bookname: 'Jingle Bells',
        price: '308',
        Image: 'https://www.mackids.com.tw/upload/product/AFWA1601-in0.jpg',
    },
    {
        bookname: 'Listen to the Jungle',
        price: '543',
        Image: 'https://www.mackids.com.tw/upload/product/AFNC0109-in0.jpg',
    },
    {
        bookname: 'IT"S MUSIC TIME',
        price: '200',
        Image: 'https://www.mackids.com.tw/upload/product/AFBN0131-in0.jpg',
    },
  ];

//const router = Router();
const Store = () => {

        books.forEach((b) => {
            BookModel.create(b, (err, createBook) => {
                if(err) {
                    console.log(err);
                } else {
                    console.log('CREATED');
                    createBook.save();
                }
            });
        });

};

export default Store;

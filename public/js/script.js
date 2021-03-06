import $ from 'jquery';
import data from './data';
import {appendDataToList, sortByFirstName} from './listHandler';
import styles from '../css/styles.scss';

let listEntryPoint = $('#nameList tbody');

appendDataToList(listEntryPoint, data);

$('#sortBtn').click(() => {
    sortByFirstName(listEntryPoint, data);
    return false;
});


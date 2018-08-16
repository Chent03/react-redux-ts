import * as React from 'react';
import { connect, DispatchProp } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

interface Props {
    readonly books?: Array<any>;
    readonly selectBook?: any;
}

class BookList extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }
    
    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }

    renderList() {
        return this.props.books.map((book: any) => {
            return (
                <li
                    onClick={() => this.props.selectBook(book)} 
                    key={book.title} 
                    className="list-group-item">
                    {book.title}
                </li>
            )
        })
    }
}

function mapStateToProps(state: any) {
    // Whatever is returned will show up as props
    // inside the BookList
    return {
        books: state.books
    }; 
}

function mapDispatchToProps(dispatch: any) {
    return bindActionCreators({selectBook: selectBook}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList)
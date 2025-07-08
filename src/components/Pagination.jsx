import React from "react";

export default function ProfileCard({ profile }) {
  const { firstName, lastName, specialty, image } = profile;

  return (
            <nav aria-label="Page navigation example" className='d-flex justify-content-center mt-5'>
            <ul className="pagination pagination-lg">
                <li className="page-item me-4">
                    <a className="page-link page-link-arrow px-3" href="#" aria-label="Previous">
                        <i className="bi bi-chevron-left"></i>
                    </a>
                </li>
                <li className="page-item"><a className="page-link active-pagination" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item"><a className="page-link" href="#">4</a></li>
                <li className="page-item"><a className="page-link" href="#">5</a></li>
                <li className="page-item"><a className="page-link" href="#">6</a></li>
                <li className="page-item"><a className="page-link" href="#">7</a></li>
                <li className="page-item ms-4">
                    <a className="page-link page-link-arrow px-3" href="#" aria-label="Next">
                        <i className="bi bi-chevron-right"></i>
                    </a>
                </li>
            </ul>
        </nav>
  );
}